import type { AgentSpec, Config } from "./config";
import { runAgent } from "./agent";

/**
 * The seam between "decide what to translate" and "actually translate it".
 *
 * Callers hand over a request and get the finished text back. Everything about
 * how that happens — a subprocess, an HTTP call, several of either in parallel —
 * lives behind this interface, so changing backend is a change here and nowhere
 * else. `index.ts` and `cli.ts` should never spawn or fetch directly.
 */
export interface TranslateRequest {
  prompt: string;
  content: string;
  filePath: string;
  fileName: string;
  /** Configured model, or null to let the backend pick its own default. */
  model: string | null;
  cwd: string;
  timeoutMs: number;
  env: NodeJS.ProcessEnv;
}

export interface Backend {
  /** Identifies the backend in logs and cache metadata. */
  readonly name: string;
  /** The finished text, exactly as it should be cached. */
  translate(req: TranslateRequest): Promise<string>;
}

/**
 * Runs a command and reads its stdout — pi, claude, agy, ollama and anything
 * else configured under `agents`.
 */
export class SubprocessBackend implements Backend {
  constructor(
    readonly name: string,
    private readonly spec: AgentSpec,
  ) {}

  translate(req: TranslateRequest): Promise<string> {
    return runAgent({ spec: this.spec, ...req });
  }
}

/**
 * Pick the backend named by `config.agent`.
 *
 * Only subprocess agents exist today. An HTTP backend slots in here by keying
 * off a discriminator on the spec, without touching either call site.
 */
export function resolveBackend(config: Config): Backend {
  const spec = config.agents[config.agent];
  if (!spec) {
    const known = Object.keys(config.agents).join(", ");
    throw new Error(`unknown agent '${config.agent}'. Configured agents: ${known}`);
  }
  return new SubprocessBackend(config.agent, spec);
}
