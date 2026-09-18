import {
  createConnection,
  InitializeParams,
  InitializeResult,
  ProposedFeatures,
  TextDocuments,
  TextDocumentSyncKind,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import picomatch from "picomatch";
import * as fs from "fs/promises";
import * as fsSync from "fs";
import * as path from "path";
import { pathToFileURL, fileURLToPath } from "url";

import { Config, resolveConfig, template } from "./config";
import { resolveBackend } from "./backend";
import { detect } from "./detect";
import { startPreviewServer } from "./preview";
import { openInZed } from "./open";
import { spawn } from "child_process";
import {
  cacheKey,
  cachePaths,
  pruneCache,
  readFresh,
  writeGuarded,
  writeOutput,
  writePlaceholder,
  writeSkip,
} from "./cache";

/**
 * Append a line to <cacheDir>/ai-lens.log. Zed only surfaces LSP stderr through
 * an in-app viewer, so a file log is the practical way to debug this.
 */
function debugLog(message: string): void {
  try {
    const dir = config?.cacheDir ?? path.join(process.env.HOME ?? "/tmp", ".cache", "zed-ai-lens");
    fsSync.mkdirSync(dir, { recursive: true });
    fsSync.appendFileSync(
      path.join(dir, "ai-lens.log"),
      `${new Date().toISOString()} ${message}\n`,
    );
  } catch {
    // Logging must never break the server.
  }
}

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});

const connection = createConnection(ProposedFeatures.all);
const documents = new TextDocuments(TextDocument);

let config: Config;
let isIncluded: (p: string) => boolean;
let isExcluded: (p: string) => boolean;

/** Source files currently being processed, keyed by absolute path. */
const inFlight = new Set<string>();

/**
 * Agent runs are serialised.
 *
 * Zed restores a session's tabs by opening every file at once, so an unguarded
 * flow starts one agent per markdown file simultaneously. That is slow, spends a
 * lot of tokens on documents nobody asked about, and makes the one file the user
 * is actually looking at wait behind the others.
 */
let queue: Promise<unknown> = Promise.resolve();
let queued = 0;

function enqueue<T>(task: () => Promise<T>): Promise<T> {
  queued++;
  const run = queue.then(task, task);
  queue = run.then(
    () => { queued--; },
    () => { queued--; },
  );
  return run;
}

/** Options received at initialize; the base for any later settings merge. */
let initOptions: Record<string, unknown> | undefined;

/** Whether the client can show `$/progress`, checked once at initialize. */
let supportsProgress = false;

/** URL of the read-only preview, once this instance has managed to bind a port. */
let previewUrl: string | null = null;
/** The preview is only surfaced to the user once per session. */
let previewOpened = false;

function applyConfig(raw: unknown): void {
  config = resolveConfig(raw);
  // `dot: true` so globs like `docs/**/*.md` still match inside dotted dirs.
  isIncluded = config.include.length
    ? picomatch(config.include, { dot: true })
    : () => false;
  isExcluded = config.exclude.length
    ? picomatch(config.exclude, { dot: true })
    : () => false;
}

connection.onInitialize((params: InitializeParams): InitializeResult => {
  initOptions = (params.initializationOptions ?? {}) as Record<string, unknown>;
  applyConfig(initOptions);
  supportsProgress = params.capabilities.window?.workDoneProgress === true;
  debugLog(
    `initialize: rootUri=${params.rootUri} initializationOptions=${JSON.stringify(params.initializationOptions)}`,
  );
  debugLog(
    `resolved: agent=${config.agent} include=${JSON.stringify(config.include)} workDoneProgress=${supportsProgress}`,
  );

  return {
    capabilities: {
      textDocumentSync: {
        openClose: true,
        change: TextDocumentSyncKind.Full,
        save: false,
      },
    },
  };
});

connection.onInitialized(async () => {
  connection.console.log(
    `AI Lens ready — agent=${config.agent} include=${JSON.stringify(config.include)}`,
  );
  if (config.include.length === 0) {
    connection.console.log(
      "AI Lens: no `include` globs configured, so nothing will be processed.",
    );
  }

  if (config.preview.enabled) {
    previewUrl = await startPreviewServer({
      port: config.preview.port,
      cacheDir: config.cacheDir,
      log: debugLog,
    });
    if (previewUrl) debugLog(`preview: serving ${previewUrl}`);
  }
});

/**
 * Show the preview to the user, once.
 *
 * Only the instance holding the port can open it, and reopening on every
 * translation would steal focus from the editor mid-read.
 */
function revealPreview(): void {
  if (!previewUrl || previewOpened || !config.preview.open) return;
  previewOpened = true;
  try {
    const opener =
      process.platform === "darwin"
        ? "open"
        : process.platform === "win32"
          ? "start"
          : "xdg-open";
    spawn(opener, [previewUrl], { detached: true, stdio: "ignore" }).unref();
    debugLog(`preview: opened ${previewUrl}`);
  } catch (error: unknown) {
    debugLog(`preview: could not open browser: ${describe(error)}`);
  }
}

/**
 * Apply a settings change on top of the options we were initialized with.
 *
 * Zed sends `workspace/didChangeConfiguration` carrying `lsp.ai-lens.settings`,
 * which is a *different* key from the `initialization_options` this extension is
 * configured through. When that key is unset the payload is empty, so treating it
 * as a fresh config would silently wipe `include` and stop processing entirely.
 */
connection.onDidChangeConfiguration((params) => {
  const settings = params.settings as Record<string, unknown> | undefined;
  if (!settings || typeof settings !== "object") return;

  const scoped = (settings["ai-lens"] ?? settings) as Record<string, unknown>;
  if (!scoped || typeof scoped !== "object" || Object.keys(scoped).length === 0) {
    debugLog("didChangeConfiguration: empty payload, keeping initialization options");
    return;
  }

  applyConfig({ ...(initOptions ?? {}), ...scoped });
  debugLog(`didChangeConfiguration: merged, include=${JSON.stringify(config.include)}`);
});

function uriToPath(uri: string): string {
  return uri.startsWith("file://") ? fileURLToPath(uri) : uri;
}

/** Decide whether a freshly opened document should be processed. */
function shouldProcess(filePath: string): boolean {
  // Never recurse into our own output.
  const rel = path.relative(config.cacheDir, filePath);
  const insideCache = rel !== "" && !rel.startsWith("..") && !path.isAbsolute(rel);
  if (insideCache) return false;

  if (isExcluded(filePath)) return false;
  return isIncluded(filePath);
}

/**
 * Show a finished translation: write it, lock it, then let Zed open it.
 *
 * Everything here used to go through `workspace/applyEdit`, which was a mistake
 * on two counts. It does not open a file tab at all — it opens an "LSP Edit"
 * multibuffer with an *Open File* button — and because it has to truncate the
 * file first, the buffer was left dirty over a file we then rewrote, which is
 * what produced Zed's "this file has changed on disk, overwrite?" prompt.
 *
 * Writing the file once and handing the path to the `zed` binary avoids both:
 * nothing is ever dirty, and because nothing truncates the file, Zed loads the
 * `0444` output as a genuinely read-only buffer.
 */
async function reveal(outPath: string): Promise<void> {
  const opened = await openInZed(outPath, config.zedBinary);
  debugLog(
    opened
      ? `opened ${path.basename(outPath)} in Zed (read-only)`
      : `could not run '${config.zedBinary}'; output at ${outPath}`,
  );
  if (!opened) {
    connection.window.showWarningMessage(
      `AI Lens: '${config.zedBinary}' is not on PATH. Translation saved to ${outPath}`,
    );
  }
}

function describe(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

/**
 * Run `fn` while showing progress in the editor.
 *
 * An agent call on a large file can take a minute or more, and nothing else in
 * this flow is visible until it finishes — no tab is opened up front, because
 * whether a tab is warranted at all is the agent's decision. Without this the
 * editor looks idle and the extension looks broken.
 */
async function withProgress<T>(title: string, fn: () => Promise<T>): Promise<T> {
  if (!supportsProgress) return fn();

  let reporter;
  try {
    reporter = await connection.window.createWorkDoneProgress();
  } catch (error: unknown) {
    debugLog(`progress unavailable: ${describe(error)}`);
    return fn();
  }

  reporter.begin("AI Lens", undefined, title, false);
  try {
    return await fn();
  } finally {
    reporter.done();
  }
}

/** Trim the cache after a write. Never allowed to fail the request. */
async function prune(): Promise<void> {
  try {
    const removed = await pruneCache(config.cacheDir, config.maxCacheEntries);
    if (removed) debugLog(`pruned ${removed} cache entr${removed === 1 ? "y" : "ies"}`);
  } catch (error: unknown) {
    debugLog(`prune failed: ${describe(error)}`);
  }
}

documents.onDidOpen(async (event) => {
  const { document } = event;
  const filePath = uriToPath(document.uri);

  const willProcess = shouldProcess(filePath);
  debugLog(`didOpen: ${filePath} -> ${willProcess ? "process" : "skip"}`);
  if (!willProcess) return;
  if (inFlight.has(filePath)) return;

  const content = document.getText();
  const fileName = path.basename(filePath);

  // Large documents take minutes to translate in full. Auto-translating them on
  // open reads as a hang, so they are left for the explicit command instead.
  const bytes = Buffer.byteLength(content, "utf-8");
  if (config.maxAutoBytes > 0 && bytes > config.maxAutoBytes) {
    debugLog(
      `too large to auto-translate: ${fileName} (${bytes}B > ${config.maxAutoBytes}B) — use the command palette action`,
    );
    return;
  }

  let backend;
  try {
    backend = resolveBackend(config);
  } catch (error: unknown) {
    connection.window.showErrorMessage(`AI Lens: ${describe(error)}`);
    return;
  }

  const prompt = template(config.prompt, {
    targetLanguage: config.targetLanguage,
    skipSentinel: config.skipSentinel,
    file: filePath,
    filename: fileName,
  });

  const key = cacheKey({ content, prompt, agent: config.agent, model: config.model });
  const entry = cachePaths(config.cacheDir, filePath);

  // Cache hit: this exact content was judged before. A `skipped` verdict means
  // the agent already said no output is warranted, so open nothing.
  const cachedMeta = await readFresh(entry, key);
  if (cachedMeta) {
    if (cachedMeta.skipped) {
      debugLog(`cache hit (no change needed): ${fileName}`);
      return;
    }
    if (config.openInEditor) await reveal(entry.outPath);
    revealPreview();
    connection.console.log(`AI Lens: cache hit for ${fileName}`);
    debugLog(`cache hit: ${fileName}`);
    return;
  }

  // Decide locally whether there is anything to do. Asking the agent costs a
  // full round trip to be told "already English", which is the common case when
  // opening files in an editor; this answers it in about a millisecond.
  // Deliberately not cached: re-deciding is free, and caching a heuristic
  // verdict would outlive any later improvement to it. The command palette
  // action bypasses this entirely — asking explicitly overrides the guess.
  const verdict = detect(content, config.targetLanguage);
  if (!verdict.needsTranslation) {
    debugLog(`no change needed (local): ${fileName} — ${verdict.reason}`);
    return;
  }
  debugLog(`needs translation (local): ${fileName} — ${verdict.reason}`);

  inFlight.add(filePath);
  try {
    // No placeholder tab here. Whether a tab should exist at all is the agent's
    // call, so nothing is shown until its answer is known — otherwise every file
    // that turns out to need no translation would still flash a tab open.
    debugLog(`queued ${fileName} (${queued} ahead)`);
    const started = Date.now();
    const stdout = await withProgress(`${fileName} — ${backend.name}`, () =>
      enqueue(() =>
        backend.translate({
          prompt,
          filePath,
          fileName,
          content,
          model: config.model,
          cwd: path.dirname(filePath),
          timeoutMs: config.timeoutMs,
          env: process.env,
        }),
      ),
    );
    const elapsed = ((Date.now() - started) / 1000).toFixed(1);

    const trimmed = stdout.trim();
    const meta = {
      key,
      source: filePath,
      agent: config.agent,
      model: config.model,
    };

    // The sentinel is compared against the whole trimmed reply, so a translation
    // that merely happens to mention it is not mistaken for a skip.
    if (trimmed === config.skipSentinel || trimmed.length === 0) {
      await writeSkip(entry, meta);
      await prune();
      connection.console.log(`AI Lens: ${fileName} needs no translation`);
      debugLog(`no change needed: ${fileName} (${elapsed}s)`);
      return;
    }

    await writeOutput(entry, stdout, meta, config.readOnlyOutput);
    await prune();
    if (config.openInEditor) await reveal(entry.outPath);
    revealPreview();
    connection.console.log(`AI Lens: translated ${fileName}`);
    debugLog(`translated: ${fileName} (${stdout.length} bytes, ${elapsed}s)`);
  } catch (error: unknown) {
    const message = describe(error);
    // Surface the failure in a tab rather than failing silently.
    const report = `AI Lens failed for ${fileName}:\n\n${message}\n`;
    await writePlaceholder(entry, report);
    debugLog(`failed: ${fileName}: ${message}`);
    connection.window.showErrorMessage(`AI Lens: ${message}`);
    connection.console.error(`AI Lens: ${message}`);
  } finally {
    inFlight.delete(filePath);
  }
});

documents.listen(connection);
connection.listen();
