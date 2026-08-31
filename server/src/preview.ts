import * as fs from "fs/promises";
import * as http from "http";
import * as path from "path";
import { marked } from "marked";

import type { Meta } from "./cache";
import { cachePaths } from "./cache";

/**
 * A local, read-only preview of the most recent translation.
 *
 * The point of serving this rather than opening an editor tab is that a rendered
 * page cannot be edited or saved over. The output is a derived artifact — a view
 * of someone else's document — and an editable buffer invites accidentally
 * "fixing" a translation that is about to be overwritten by the next run anyway.
 *
 * The page polls rather than holding a socket open, because several language
 * server instances can be alive at once (Zed starts one per worktree) and only
 * one of them can own the port. Every instance writes to the same cache
 * directory, so whichever one holds the port can serve results produced by all of
 * them, and a failure to bind is not an error.
 */

const POLL_MS = 1200;

export interface PreviewOptions {
  port: number;
  cacheDir: string;
  log: (message: string) => void;
  /**
   * Whether the listening socket should keep the process alive.
   *
   * The language server unrefs it so the preview never delays editor shutdown.
   * The CLI's `--serve` mode is the opposite: serving is the only reason that
   * process exists, so it must hold the event loop open.
   */
  keepAlive?: boolean;
}

/** Newest non-skipped cache entry, or null when nothing has been translated. */
async function latestEntry(
  cacheDir: string,
): Promise<{ meta: Meta; markdown: string } | null> {
  const metaDir = path.join(cacheDir, "meta");
  let names: string[];
  try {
    names = (await fs.readdir(metaDir)).filter((n) => n.endsWith(".json"));
  } catch {
    return null;
  }

  let best: Meta | null = null;
  for (const name of names) {
    try {
      const meta = JSON.parse(
        await fs.readFile(path.join(metaDir, name), "utf-8"),
      ) as Meta;
      if (meta.skipped) continue;
      if (!best || Date.parse(meta.processedAt) > Date.parse(best.processedAt)) {
        best = meta;
      }
    } catch {
      // Skip unreadable metadata.
    }
  }
  if (!best) return null;

  try {
    const markdown = await fs.readFile(
      cachePaths(cacheDir, best.source).outPath,
      "utf-8",
    );
    return { meta: best, markdown };
  } catch {
    return null;
  }
}

/**
 * Strip the handful of constructs that could execute in the page.
 *
 * The markdown here is model output derived from the user's own files and is
 * served only on loopback, so this is a guard against a document carrying script
 * through translation, not a hostile-input sanitizer.
 */
function defang(html: string): string {
  return html
    .replace(/<\s*(script|iframe|object|embed)\b[\s\S]*?<\s*\/\s*\1\s*>/gi, "")
    .replace(/<\s*(script|iframe|object|embed)\b[^>]*>/gi, "")
    .replace(/\son[a-z]+\s*=\s*"[^"]*"/gi, "")
    .replace(/\son[a-z]+\s*=\s*'[^']*'/gi, "")
    .replace(/\son[a-z]+\s*=\s*[^\s>]+/gi, "")
    .replace(/(href|src)\s*=\s*(["'])\s*javascript:[^"']*\2/gi, '$1="#"');
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const PAGE = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AI Lens</title>
<style>
  :root {
    color-scheme: light dark;
    --bg: #ffffff; --fg: #1f2328; --muted: #59636e; --rule: #d1d9e0;
    --code-bg: #f6f8fa; --accent: #0969da;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #0d1117; --fg: #e6edf3; --muted: #9198a1; --rule: #3d444d;
      --code-bg: #161b22; --accent: #4493f8;
    }
  }
  * { box-sizing: border-box; }
  body {
    margin: 0; background: var(--bg); color: var(--fg);
    font: 16px/1.65 -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  }
  header {
    position: sticky; top: 0; z-index: 5; background: var(--bg);
    border-bottom: 1px solid var(--rule); padding: 10px 24px;
    display: flex; gap: 12px; align-items: baseline;
  }
  header .name { font-weight: 600; }
  header .path, header .meta { color: var(--muted); font-size: 12px; }
  header .meta { margin-left: auto; }
  main { max-width: 860px; margin: 0 auto; padding: 28px 24px 96px; }
  main :first-child { margin-top: 0; }
  h1, h2, h3, h4 { line-height: 1.3; margin: 1.6em 0 .6em; }
  h1, h2 { border-bottom: 1px solid var(--rule); padding-bottom: .3em; }
  a { color: var(--accent); }
  code {
    background: var(--code-bg); padding: .2em .4em; border-radius: 6px;
    font: 13px/1.5 ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
  }
  pre {
    background: var(--code-bg); padding: 14px 16px; border-radius: 8px;
    overflow-x: auto;
  }
  pre code { background: none; padding: 0; }
  blockquote {
    margin: 1em 0; padding: 0 1em; color: var(--muted);
    border-left: 3px solid var(--rule);
  }
  table { border-collapse: collapse; display: block; overflow-x: auto; }
  th, td { border: 1px solid var(--rule); padding: 6px 13px; }
  img { max-width: 100%; }
  .empty { color: var(--muted); padding: 64px 24px; text-align: center; }
</style>
</head>
<body>
<header>
  <span class="name" id="name">AI Lens</span>
  <span class="path" id="path"></span>
  <span class="meta" id="meta">waiting…</span>
</header>
<main id="content"><div class="empty">No translation yet. Open a non-English Markdown file in Zed.</div></main>
<script>
  let currentId = null;
  async function poll() {
    try {
      const res = await fetch("/latest", { cache: "no-store" });
      const data = await res.json();
      if (data.id && data.id !== currentId) {
        currentId = data.id;
        document.getElementById("name").textContent = data.title;
        document.getElementById("path").textContent = data.source;
        document.getElementById("meta").textContent = data.agent + " · " + data.processedAt;
        document.getElementById("content").innerHTML = data.html;
        document.title = data.title + " — AI Lens";
        window.scrollTo(0, 0);
      }
    } catch (e) {
      document.getElementById("meta").textContent = "disconnected";
    }
    setTimeout(poll, __POLL_MS__);
  }
  poll();
</script>
</body>
</html>`;

/**
 * Start the preview server. Returns the URL it is reachable at, or null when the
 * port is already held (another instance is serving the same cache) or binding
 * failed for any other reason.
 */
export function startPreviewServer(
  opts: PreviewOptions,
): Promise<string | null> {
  return new Promise((resolve) => {
    const server = http.createServer(async (req, res) => {
      try {
        const url = (req.url ?? "/").split("?")[0];

        if (url === "/latest") {
          const found = await latestEntry(opts.cacheDir);
          res.writeHead(200, {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
          });
          if (!found) {
            res.end(JSON.stringify({ id: null }));
            return;
          }
          // The command palette action accepts any file, so the output is not
          // necessarily markdown. Rendering a source file as markdown would
          // mangle it, so anything else is shown verbatim.
          const isMarkdown = /\.(md|markdown|mdx)$/i.test(found.meta.source);
          const html = isMarkdown
            ? defang(await marked.parse(found.markdown, { async: true, gfm: true }))
            : `<pre><code>${escapeHtml(found.markdown)}</code></pre>`;
          res.end(
            JSON.stringify({
              id: found.meta.key,
              title: path.basename(found.meta.source),
              source: found.meta.source,
              agent: found.meta.agent,
              processedAt: found.meta.processedAt,
              html,
            }),
          );
          return;
        }

        if (url === "/" || url === "/index.html") {
          res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "no-store",
          });
          res.end(PAGE.replace("__POLL_MS__", String(POLL_MS)));
          return;
        }

        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("not found");
      } catch (error: unknown) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(escapeHtml(error instanceof Error ? error.message : String(error)));
      }
    });

    server.on("error", (error: NodeJS.ErrnoException) => {
      if (error.code === "EADDRINUSE") {
        // Expected with more than one worktree open: another instance is already
        // serving the shared cache, and its page will show our results too.
        opts.log(`preview: port ${opts.port} already served by another instance`);
      } else {
        opts.log(`preview: failed to start: ${error.message}`);
      }
      resolve(null);
    });

    // Loopback only — this serves the contents of local files.
    server.listen(opts.port, "127.0.0.1", () => {
      resolve(`http://127.0.0.1:${opts.port}/`);
    });
    if (!opts.keepAlive) server.unref();
  });
}
