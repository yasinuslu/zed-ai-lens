import * as fs from "fs/promises";
import * as os from "os";
import * as path from "path";

/**
 * Strip comments and trailing commas so Zed's JSONC settings can be parsed.
 *
 * Written by hand rather than pulled in as a dependency because it only has to
 * cope with one well-formed file. It tracks string and escape state so that a
 * `//` inside a value — a URL, a glob — is not mistaken for a comment.
 */
export function stripJsonc(input: string): string {
  let out = "";
  let inString = false;
  let inLine = false;
  let inBlock = false;

  for (let i = 0; i < input.length; i++) {
    const ch = input[i];
    const next = input[i + 1];

    if (inLine) {
      if (ch === "\n") {
        inLine = false;
        out += ch;
      }
      continue;
    }
    if (inBlock) {
      if (ch === "*" && next === "/") {
        inBlock = false;
        i++;
      }
      continue;
    }
    if (inString) {
      out += ch;
      if (ch === "\\") {
        out += next ?? "";
        i++;
      } else if (ch === '"') {
        inString = false;
      }
      continue;
    }
    if (ch === '"') {
      inString = true;
      out += ch;
      continue;
    }
    if (ch === "/" && next === "/") {
      inLine = true;
      i++;
      continue;
    }
    if (ch === "/" && next === "*") {
      inBlock = true;
      i++;
      continue;
    }
    out += ch;
  }

  // Trailing commas before a closing brace or bracket.
  return out.replace(/,(\s*[}\]])/g, "$1");
}

/** Candidate locations of Zed's user settings, most specific first. */
function settingsCandidates(): string[] {
  const home = os.homedir();
  return [
    path.join(home, ".config", "zed", "settings.json"),
    path.join(home, "Library", "Application Support", "Zed", "settings.json"),
  ];
}

/**
 * Read `lsp.ai-lens.initialization_options` out of Zed's settings.
 *
 * The CLI deliberately shares the editor's configuration rather than owning a
 * config file of its own, so a prompt or agent change made for the extension
 * applies to the task too, with no second place to keep in sync.
 */
export async function readZedInitializationOptions(
  serverId = "ai-lens",
): Promise<Record<string, unknown>> {
  for (const candidate of settingsCandidates()) {
    try {
      const raw = await fs.readFile(candidate, "utf-8");
      const parsed = JSON.parse(stripJsonc(raw)) as {
        lsp?: Record<string, { initialization_options?: Record<string, unknown> }>;
      };
      const options = parsed.lsp?.[serverId]?.initialization_options;
      if (options && typeof options === "object") return options;
      return {};
    } catch {
      // Try the next location.
    }
  }
  return {};
}
