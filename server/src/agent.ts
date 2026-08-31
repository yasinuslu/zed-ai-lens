import { spawn } from "child_process";
import type { AgentSpec } from "./config";
import { template } from "./config";

export interface RunOptions {
  spec: AgentSpec;
  prompt: string;
  filePath: string;
  fileName: string;
  content: string;
  model: string | null;
  cwd: string;
  timeoutMs: number;
  env: NodeJS.ProcessEnv;
}

/** Build the final argv, splicing in model args only when a model is set. */
export function buildArgs(opts: RunOptions): string[] {
  const vars = {
    prompt: opts.prompt,
    file: opts.filePath,
    filename: opts.fileName,
    model: opts.model ?? "",
  };
  const modelArgs = opts.model ? (opts.spec.modelArgs ?? []) : [];
  return [...modelArgs, ...opts.spec.args].map((arg) => template(arg, vars));
}

/**
 * Run the configured agent and return its stdout. Rejects on a non-zero exit,
 * a spawn failure, or the timeout elapsing.
 */
export function runAgent(opts: RunOptions): Promise<string> {
  const args = buildArgs(opts);

  return new Promise((resolve, reject) => {
    const child = spawn(opts.spec.command, args, {
      cwd: opts.cwd,
      env: opts.env,
      stdio: ["pipe", "pipe", "pipe"],
    });

    let stdout = "";
    let stderr = "";
    let settled = false;

    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      child.kill("SIGKILL");
      reject(new Error(`agent timed out after ${opts.timeoutMs}ms`));
    }, opts.timeoutMs);

    const finish = (err: Error | null, value?: string) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      if (err) reject(err);
      else resolve(value!);
    };

    child.stdout.on("data", (chunk: Buffer) => {
      stdout += chunk.toString();
    });
    child.stderr.on("data", (chunk: Buffer) => {
      stderr += chunk.toString();
    });

    child.on("error", (err) => {
      finish(
        new Error(
          `failed to run '${opts.spec.command}': ${err.message}. Is it installed and on PATH?`,
        ),
      );
    });

    child.on("close", (code) => {
      if (code === 0) {
        finish(null, stdout);
      } else {
        const detail = stderr.trim() || stdout.trim() || "(no output)";
        finish(new Error(`'${opts.spec.command}' exited with ${code}: ${detail}`));
      }
    });

    // Some agents take the file as an argument; others expect it on stdin.
    if (opts.spec.stdin === "content") {
      child.stdin.end(opts.content);
    } else {
      child.stdin.end();
    }
  });
}
