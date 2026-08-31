import * as os from "os";
import * as path from "path";

/** How the agent process receives the file's text. */
export type StdinMode = "none" | "content";

export interface AgentSpec {
  /** Executable name or absolute path. Resolved via PATH. */
  command: string;
  /** Argument templates. Supports {{prompt}}, {{file}}, {{filename}}. */
  args: string[];
  /** Extra args spliced in only when a model is configured. Supports {{model}}. */
  modelArgs?: string[];
  /** Whether the file's text is piped to stdin. */
  stdin?: StdinMode;
}

export interface Config {
  agent: string;
  model: string | null;
  targetLanguage: string;
  prompt: string;
  /**
   * Marker the agent emits to say the file needs no output. When stdout is just
   * this, no tab opens and the verdict is cached against the file's content.
   */
  skipSentinel: string;
  include: string[];
  exclude: string[];
  cacheDir: string;
  /** The `zed` CLI used to open results. Absolute path if it is not on PATH. */
  zedBinary: string;
  /** Maximum cache entries kept; the oldest are evicted past this. 0 disables. */
  maxCacheEntries: number;
  /**
   * Local browser preview. Off by default — the point of this extension is to
   * read a document without leaving the editor.
   */
  preview: { enabled: boolean; port: number; open: boolean };
  /**
   * Make the output file read-only on disk, so Zed opens it as a read-only
   * buffer. Zed decides a buffer's capability from file permissions at load
   * time (`buffer_store.rs`: `is_writable` -> `Capability::Read`), which is the
   * only way to get a non-editable tab.
   */
  readOnlyOutput: boolean;
  /**
   * Largest file auto-translated on open, in bytes. Beyond this the agent takes
   * minutes and the wait reads as a hang; the command palette action ignores the
   * limit, because asking explicitly means accepting the wait. 0 disables.
   */
  maxAutoBytes: number;
  /**
   * Also open the raw translation as an editor tab. Off by default: that tab is
   * an editable buffer over a derived file, and the preview is the intended way
   * to read the result.
   */
  openInEditor: boolean;
  timeoutMs: number;
  agents: Record<string, AgentSpec>;
}

const DEFAULT_PROMPT = [
  "Determine the natural language the file below is written in.",
  "If its prose is already in {{targetLanguage}}, output exactly {{skipSentinel}}",
  "and nothing else.",
  "Otherwise translate it into {{targetLanguage}}:",
  "preserve all formatting, markup, and code blocks exactly,",
  "translate only prose, and leave code, identifiers, and URLs untouched.",
  "Output only the translated file, with no commentary or fences.",
  "A file with no prose at all counts as already in {{targetLanguage}}.",
].join(" ");

const DEFAULT_AGENTS: Record<string, AgentSpec> = {
  pi: {
    // pi wants the message before any @file reference; with the file first it
    // returns nothing at all.
    command: "pi",
    args: ["--print", "--mode", "text", "--", "{{prompt}}", "@{{file}}"],
    modelArgs: ["--model", "{{model}}"],
    stdin: "none",
  },
  claude: {
    command: "claude",
    args: ["-p", "{{prompt}}"],
    modelArgs: ["--model", "{{model}}"],
    stdin: "content",
  },
  codex: {
    command: "codex",
    args: ["exec", "{{prompt}}"],
    modelArgs: ["--model", "{{model}}"],
    stdin: "content",
  },
};

const DEFAULTS: Config = {
  agent: "pi",
  model: null,
  targetLanguage: "English",
  prompt: DEFAULT_PROMPT,
  skipSentinel: "AI-LENS-NO-CHANGE",
  include: [],
  exclude: ["**/node_modules/**", "**/.git/**", "**/target/**", "**/dist/**"],
  cacheDir: path.join(os.homedir(), ".cache", "zed-ai-lens"),
  maxCacheEntries: 50,
  zedBinary: "zed",
  preview: { enabled: false, port: 7391, open: false },
  openInEditor: true,
  readOnlyOutput: true,
  maxAutoBytes: 20_000,
  timeoutMs: 300_000,
  agents: DEFAULT_AGENTS,
};

/** Expand a leading `~` to the user's home directory. */
export function expandHome(p: string): string {
  if (p === "~") return os.homedir();
  if (p.startsWith("~/")) return path.join(os.homedir(), p.slice(2));
  return p;
}

function asStringArray(value: unknown, fallback: string[]): string[] {
  if (!Array.isArray(value)) return fallback;
  return value.filter((v): v is string => typeof v === "string");
}

/**
 * Merge user settings over the defaults. Agent specs merge per-agent so a user
 * can override just `command` on `pi` without restating its argument template.
 */
export function resolveConfig(raw: unknown): Config {
  const opts = (raw ?? {}) as Record<string, unknown>;

  const agents: Record<string, AgentSpec> = { ...DEFAULT_AGENTS };
  const rawAgents = opts.agents as Record<string, Partial<AgentSpec>> | undefined;
  if (rawAgents && typeof rawAgents === "object") {
    for (const [name, spec] of Object.entries(rawAgents)) {
      if (!spec || typeof spec !== "object") continue;
      const base = agents[name] ?? { command: name, args: [], stdin: "content" as StdinMode };
      agents[name] = { ...base, ...spec };
    }
  }

  return {
    agent: typeof opts.agent === "string" ? opts.agent : DEFAULTS.agent,
    model: typeof opts.model === "string" && opts.model ? opts.model : DEFAULTS.model,
    targetLanguage:
      typeof opts.targetLanguage === "string" ? opts.targetLanguage : DEFAULTS.targetLanguage,
    prompt: typeof opts.prompt === "string" ? opts.prompt : DEFAULTS.prompt,
    skipSentinel:
      typeof opts.skipSentinel === "string" && opts.skipSentinel
        ? opts.skipSentinel
        : DEFAULTS.skipSentinel,
    include: asStringArray(opts.include, DEFAULTS.include),
    exclude: asStringArray(opts.exclude, DEFAULTS.exclude),
    cacheDir: expandHome(
      typeof opts.cacheDir === "string" ? opts.cacheDir : DEFAULTS.cacheDir,
    ),
    zedBinary: typeof opts.zedBinary === "string" && opts.zedBinary ? opts.zedBinary : DEFAULTS.zedBinary,
    maxCacheEntries:
      typeof opts.maxCacheEntries === "number"
        ? opts.maxCacheEntries
        : DEFAULTS.maxCacheEntries,
    preview: {
      ...DEFAULTS.preview,
      ...((opts.preview as Record<string, unknown> | undefined) ?? {}),
    } as Config["preview"],
    openInEditor:
      typeof opts.openInEditor === "boolean"
        ? opts.openInEditor
        : DEFAULTS.openInEditor,
    readOnlyOutput:
      typeof opts.readOnlyOutput === "boolean"
        ? opts.readOnlyOutput
        : DEFAULTS.readOnlyOutput,
    maxAutoBytes:
      typeof opts.maxAutoBytes === "number" ? opts.maxAutoBytes : DEFAULTS.maxAutoBytes,
    timeoutMs: typeof opts.timeoutMs === "number" ? opts.timeoutMs : DEFAULTS.timeoutMs,
    agents,
  };
}

/** Substitute `{{name}}` placeholders. Unknown placeholders are left as-is. */
export function template(input: string, vars: Record<string, string>): string {
  return input.replace(/\{\{(\w+)\}\}/g, (match, key: string) =>
    key in vars ? vars[key] : match,
  );
}
