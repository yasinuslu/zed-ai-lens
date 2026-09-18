/**
 * `ai-lens <file>` — translate one file on demand and show it in the preview.
 *
 * This exists because Zed extensions cannot contribute command palette actions,
 * and because the language server only ever sees files whose language is
 * registered in `extension.toml` and whose path matches `include`. A Zed task
 * has neither restriction: it is invoked from the palette and receives whatever
 * file is open, so this path deliberately ignores `include`/`exclude` — asking
 * for a translation is the opt-in.
 *
 * Configuration is read from Zed's own settings so there is a single source of
 * truth, and results are written to the same cache the extension uses, which is
 * what makes them appear in an already-open preview without any coordination
 * between the two processes.
 */
import * as fs from "fs/promises";
import * as path from "path";
import { spawn } from "child_process";

import { resolveConfig, template } from "./config";
import { resolveBackend } from "./backend";
import { cacheKey, cachePaths, pruneCache, readFresh, writeOutput } from "./cache";
import { readZedInitializationOptions } from "./settings";
import { startPreviewServer } from "./preview";
import { openInZed } from "./open";

function usage(): never {
  console.error(
    [
      "usage: ai-lens <file> [--force] [--serve]",
      "",
      "  --force   ignore any cached result for this file",
      "  --serve   keep serving the preview in the foreground (for use outside Zed)",
    ].join("\n"),
  );
  process.exit(2);
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const force = args.includes("--force");
  const serve = args.includes("--serve");
  const target = args.find((a) => !a.startsWith("--"));
  if (!target) usage();

  const filePath = path.resolve(target);
  const fileName = path.basename(filePath);

  let content: string;
  try {
    content = await fs.readFile(filePath, "utf-8");
  } catch (error: unknown) {
    console.error(`ai-lens: cannot read ${filePath}: ${(error as Error).message}`);
    process.exit(1);
  }

  const config = resolveConfig(await readZedInitializationOptions());
  // No local language detection here, for the same reason a cached skip is not
  // honoured below: invoking the command is an explicit request to translate
  // this file, which overrides any guess about whether it needs it.
  let backend;
  try {
    backend = resolveBackend(config);
  } catch (error: unknown) {
    console.error(`ai-lens: ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  }

  const prompt = template(config.prompt, {
    targetLanguage: config.targetLanguage,
    skipSentinel: config.skipSentinel,
    file: filePath,
    filename: fileName,
  });

  const key = cacheKey({ content, prompt, agent: config.agent, model: config.model });
  const entry = cachePaths(config.cacheDir, filePath);

  let produced: string | null = null;
  const cached = force ? null : await readFresh(entry, key);

  if (cached && !cached.skipped) {
    console.log(`ai-lens: ${fileName} already translated (cached)`);
    produced = await fs.readFile(entry.outPath, "utf-8");
  } else {
    // A cached "no change needed" is not honoured here. Invoking the command is
    // an explicit request to see this file, so re-asking is the right behaviour;
    // the agent may also simply be wrong about a mixed-language document.
    console.log(`ai-lens: running ${backend.name} on ${fileName}…`);
    const started = Date.now();
    const stdout = await backend.translate({
      prompt,
      filePath,
      fileName,
      content,
      model: config.model,
      cwd: path.dirname(filePath),
      timeoutMs: config.timeoutMs,
      env: process.env,
    });
    const elapsed = ((Date.now() - started) / 1000).toFixed(1);
    const trimmed = stdout.trim();

    if (!trimmed || trimmed === config.skipSentinel) {
      // On demand, "nothing to do" still deserves something to look at.
      produced = `_${fileName} is already in ${config.targetLanguage}; nothing to translate._\n`;
    } else {
      produced = stdout;
    }

    await writeOutput(
      entry,
      produced,
      { key, source: filePath, agent: config.agent, model: config.model },
      config.readOnlyOutput,
    );
    await pruneCache(config.cacheDir, config.maxCacheEntries);
    console.log(`ai-lens: done in ${elapsed}s`);
  }

  const url = `http://127.0.0.1:${config.preview.port}/`;

  if (serve) {
    const served = await startPreviewServer({
      port: config.preview.port,
      cacheDir: config.cacheDir,
      log: (m) => console.log(`ai-lens: ${m}`),
      keepAlive: true,
    });
    if (served) {
      console.log(`ai-lens: serving ${served} — press ctrl-c to stop`);
      open(url);
      await new Promise(() => {}); // the ref'd socket holds the process open

    }
    return;
  }

  // With the browser preview enabled, an already-running page picks this up by
  // polling and there is nothing else to do.
  if (config.preview.enabled && (await isPreviewUp(url))) {
    open(url);
    console.log(`ai-lens: shown in ${url}`);
    return;
  }

  // Otherwise open it in Zed. Going through the `zed` binary rather than the
  // language server's applyEdit matters: nothing truncates the file first, so
  // Zed loads it with its 0444 permissions intact and the tab is genuinely
  // read-only — which the language server's own tab cannot be.
  if (await openInZed(entry.outPath, config.zedBinary)) {
    console.log(`ai-lens: opened ${entry.outPath}`);
  } else {
    console.log(`ai-lens: output written to ${entry.outPath}`);
  }
}

async function isPreviewUp(url: string): Promise<boolean> {
  try {
    const res = await fetch(`${url}latest`, {
      signal: AbortSignal.timeout(1500),
    });
    return res.ok;
  } catch {
    return false;
  }
}

function open(url: string): void {
  const opener =
    process.platform === "darwin"
      ? "open"
      : process.platform === "win32"
        ? "start"
        : "xdg-open";
  try {
    spawn(opener, [url], { detached: true, stdio: "ignore" }).unref();
  } catch {
    // Not fatal: the URL is printed either way.
  }
}

main().catch((error: unknown) => {
  console.error(`ai-lens: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
});
