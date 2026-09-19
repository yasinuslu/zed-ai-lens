# zed-ai-lens

View any file through a configured AI prompt — translate, summarize, explain — in a
side tab, with content-hash caching so unchanged files never re-run the agent.

Open a file matching your `include` globs and AI Lens processes it with the
configured prompt and agent (`pi` by default, or `claude` / `antigravity` / anything
else on your PATH), then opens the result in its own tab. Reopen the file and you
get the cached result instantly. Change the file and it reprocesses.

The default prompt is a **translation lens**: the agent decides whether the file
is already in `targetLanguage`, and either translates it or reports that nothing
needs doing — in which case no tab opens at all. That verdict is cached like any
other result, so an already-English file costs one agent call, once.

## How it works

Zed's extension API has no file-open hook and no way to open a tab, so AI Lens is
shaped as a language server:

```
extension.toml  ──►  Rust/WASM shim  ──►  Bun/TS LSP server
 (registers a           (spawns the         (onDidOpen ► glob match ►
  language server)       server, embeds      cache check ► run agent ►
                         it at build time)   open output tab)
```

The output tab is opened with the same trick [zed-sops](https://github.com/meesk/zed-sops)
uses: Zed does not implement `window/showDocument`
([zed#53123](https://github.com/zed-industries/zed/discussions/53123)), but a
`workspace/applyEdit` carrying a `CreateFile` + `TextDocumentEdit` pair makes Zed
materialize the file and open it in a new tab.

Three details about that mechanism were established the hard way, and the code
depends on all of them:

- **The `TextDocumentEdit` is what opens the tab**, not the `CreateFile`. Zed has
  to open a buffer in order to apply an edit. A `CreateFile` on its own opens
  nothing, and a zero-width edit gets discarded before it has that effect — so the
  edit must carry real text.
- **`CreateFile` truncates the file**, and here the file on disk *is* the cache.
  `showInTab` therefore writes the content back immediately after the edit lands.
  zed-sops can ignore this because it re-encrypts from the buffer.
- **`CreateFile` only fires the first time.** Updating an already-open tab (the
  placeholder being replaced by the finished output) sends the `TextDocumentEdit`
  alone, with the range computed from the text the buffer currently holds.

Output is **read-only** in the sense that saving it does nothing to the source —
it is a derived view, and the server never writes back.

## Configuration

All settings live under `lsp.ai-lens.initialization_options` in your Zed
`settings.json`:

```jsonc
"lsp": {
  "ai-lens": {
    "initialization_options": {
      "agent": "pi",                    // pi | claude | antigravity | custom key below
      "model": null,                    // null = agent's default
      "targetLanguage": "English",
      "include": ["**/*.md"],           // nothing runs unless a path matches
      "exclude": ["**/node_modules/**", "**/.git/**"],
      "cacheDir": "~/.cache/zed-ai-lens",
      "maxCacheEntries": 50,            // 0 disables eviction
      "skipSentinel": "AI-LENS-NO-CHANGE",
      "timeoutMs": 300000,
      "prompt": "Determine the language ... output exactly {{skipSentinel}} ..."
    }
  }
}
```

Settings changes are only read at server startup, so restart Zed (or run
`zed: restart language servers`) after editing them.

`include` is empty by default, so the extension does nothing until you opt paths
in. Globs are matched against the absolute path.

Note that settings go under `initialization_options`, **not** `settings`. Zed
sends an empty `workspace/didChangeConfiguration` right after `initialize` when
`lsp.ai-lens.settings` is unset; the server deliberately ignores an empty payload,
because treating it as a fresh config would wipe `include` and silently stop
processing anything.

### Prompt placeholders

`{{targetLanguage}}`, `{{skipSentinel}}`, `{{file}}` (absolute path),
`{{filename}}` (basename).

### Local language detection

Before any agent runs, the file is checked locally and an already-English one is
dropped without a call. Asking the agent that question costs a full round trip —
15-25s with `agy` — to be told there is nothing to do, which is the common case
when opening files in an editor. The local check answers it in about **1ms**.

Two detectors, because neither is sufficient alone:

- **Non-Latin script ratio** over the file's prose. Settles CJK, Cyrillic, Arabic
  and friends, and catches what `franc` misses: a mostly-English document with
  one section in another script. The threshold is `0.02`; measured across 500
  real `.md` files, the highest ratio in a genuinely English document was `0.003`
  (Greek letters in maths notation).
- **`franc-min`** for the Latin-script languages the ratio cannot see. Turkish,
  German and Spanish all look Latin to it.

Prose is extracted first — fenced and inline code, HTML, URLs and link targets
are stripped — because leaving them in skews detection towards English on a file
whose actual prose is not.

Measured over 500 real `.md` files: 492 skipped, 8 flagged, **1.34ms/file**, and
all 8 were genuinely Turkish.

The verdict is deliberately **not cached**: re-deciding is free, and a cached
heuristic would outlive any later improvement to it. The command palette action
bypasses detection entirely — asking explicitly overrides the guess.

Non-English `targetLanguage` values defer to the agent, since the local detector
has nothing useful to say about whether a translation into, say, German is
wanted.

### Backends

`server/src/backend.ts` is the seam between deciding *what* to translate and
actually translating it. A `Backend` takes a request and returns finished text;
how it gets there — a subprocess, an HTTP call, several of either in parallel —
stays behind that interface. `index.ts` and `cli.ts` never spawn or fetch
directly, so changing backend does not touch the run path.

`SubprocessBackend` covers everything under `agents` (`pi`, `claude`, `agy`,
`ollama`, …). An HTTP backend slots in at `resolveBackend` without either call
site changing.

### Opening no tab at all

If the agent's entire reply (trimmed) is exactly `skipSentinel`, AI Lens opens
nothing and records a `skipped` entry in the cache. The comparison is against the
whole reply, so a translation that merely mentions the marker is not mistaken for
a skip. Empty output is treated the same way.

This is what makes "translate only the files that need it" possible in one agent
call: the prompt asks for the sentinel *or* the translation, rather than running a
detect pass and a translate pass.

Drop `{{skipSentinel}}` from your prompt and the feature is simply never
triggered — every file then produces a tab.

Swap the prompt to change what the lens does — nothing about the extension is
translation-specific:

```jsonc
"prompt": "Summarize this file as five bullet points. Output only the bullets."
```

### Custom agents

Each agent is a command plus an argument template. `modelArgs` is spliced in only
when a model is resolved, and `defaultModel` supplies one when the config sets
none — a configured `model` always wins. `stdin: "content"` pipes the file text
to the process; `"none"` means the template passes it by path or inline instead.

```jsonc
"agents": {
  "pi":     { "command": "pi",     "args": ["--print", "--mode", "text", "--", "{{prompt}}", "@{{file}}"], "stdin": "none" },
  "claude": { "command": "claude", "args": ["-p", "{{prompt}}"], "stdin": "content" },
  "antigravity": { "command": "agy", "args": ["-p", "{{prompt}}\n\n---\n{{content}}", "--disable-slash-commands"], "defaultModel": "gemini-3.8-flash-low", "stdin": "none" },
  "ollama": { "command": "ollama", "args": ["run", "llama3", "{{prompt}}"], "stdin": "content" }
}
```

Placeholders in `args`: `{{prompt}}`, `{{file}}`, `{{filename}}`, `{{content}}`,
`{{model}}`.

The three ways to hand an agent the file are not interchangeable — each agent
supports exactly one. `pi` takes a path it resolves itself, `claude` takes the
text on stdin, and `agy` takes it inline in the prompt, because its headless
mode rejects stdin alongside `-p` *and* auto-denies the `read_file` permission
it would need to open a path. That denial exits `0` with the error on stdout, so
an agent configured the wrong way here caches an error message as a translation
rather than failing visibly.

## Caching

Keyed on `sha256(content + prompt + agent + model)`. The output path is stable per
source file, so reprocessing reuses the same tab instead of piling up new ones.

```
~/.cache/zed-ai-lens/out/<hash>-<basename>    # processed output
~/.cache/zed-ai-lens/meta/<hash>.json         # cache key + provenance
```

Files inside `cacheDir` are never themselves processed, so there is no recursion.
To force a rerun, delete the matching `meta/` file.

A `skipped` entry has metadata but no output file — that is how "this file needs
no translation" survives a reopen without another agent call.

### Eviction

After every write the cache is trimmed to `maxCacheEntries` (default 50),
oldest-first by `processedAt`. An entry is one metadata file plus the output it
points at, and both are removed together, so pruning leaves no orphaned output.
`skipped` entries count toward the cap too — otherwise a long run of files needing
no translation would grow the cache without bound. Set `maxCacheEntries` to `0` to
disable eviction.

## Reading the result — and read-only

Translations open as a tab in Zed. The browser preview is **off by default**; the
point is to read a document without leaving the editor.

Getting a tab that is read-only from the moment it opens is not possible through
the extension API, and it is worth recording why:

- Only a `CreateFile` in `workspace/applyEdit` surfaces a tab. A `TextDocumentEdit`
  on its own returns `applied: true` and opens nothing — measured, not assumed.
- `CreateFile` truncates, so it needs write permission.
- Zed fixes a buffer's read-only capability **at load time**, from the file's
  permissions (`buffer_store.rs`: `is_writable` -> `Capability::Read`).

The file therefore has to be writable at the instant Zed opens it, which is
exactly when the decision is made. Two paths follow from that:

**Auto-translate on open** — the tab is editable, but the file is chmod-ed `0444`
immediately after opening. A stray edit can never be saved over the cached
translation, and any later open of that path loads read-only.

**The command palette action** — genuinely read-only. It shells out to `zed --existing`
rather than going through `applyEdit`, so nothing truncates the file and Zed loads
it with its `0444` permissions intact.

For a rendered view that cannot be typed into at all, use Zed's own markdown
preview — see below. Set `readOnlyOutput: false` to keep outputs writable.

## Command palette

Zed extensions cannot contribute command palette actions, and the language server
only sees files whose language is registered in `extension.toml` and whose path
matches `include`. A **task** has neither restriction, so the palette entry is a
task shelling out to a small CLI that shares this extension's cache and config:

```
task: spawn  ->  AI Lens: translate this file
                 AI Lens: re-translate this file (ignore cache)
```

Because it runs on `$ZED_FILE`, it works on **any** file — a `.ts` with Chinese
comments, a `.json`, a `.txt` — not just the globs the server watches. Asking for
a translation is itself the opt-in, so `include`, `exclude` and `maxAutoBytes` are
all ignored, and a cached "already in the target language" verdict is re-asked
rather than obeyed.

Its output opens read-only, as described above.

```sh
node server/dist/cli.cjs <file>            # translate and open in Zed
node server/dist/cli.cjs <file> --force    # ignore the cache
node server/dist/cli.cjs <file> --serve    # serve the browser preview instead
```

## Rendered preview, inside Zed

`markdown::OpenFollowingPreview` creates a preview in `Follow` mode, which
observes the workspace and re-binds to *whichever* markdown editor becomes active
rather than staying pinned to the file that opened it. Park one in a split and
every translation is rendered there automatically. A preview cannot be typed into,
so this is also the strictest read-only view available.

Zed ships the action but binds no key to it:

```jsonc
// keymap.json
{ "bindings": { "cmd-k m": "markdown::OpenFollowingPreview" } }
```

1. Open any `.md`
2. `cmd-k m` — the following preview opens in the current pane
3. `cmd-k right` — moves it into a right-hand split
4. Click back into the editor on the left

Zed persists previews in its database, so this survives quitting.

## Browser preview (optional)

`preview: { enabled: true, port: 7391, open: true }` serves a rendered page on
loopback instead, opened once per session and refreshed by polling. Markdown is
rendered; anything else is shown verbatim. Off by default.

## Latency

Translating a real document is not fast: a 9 KB Chinese README takes roughly
**50-60 seconds** with `pi`, and large files take proportionally longer. Nothing
opens until the agent answers, because whether a tab is warranted at all is the
agent's decision.

While a run is in flight the server reports `$/progress`, which Zed shows in its
status bar — that indicator is the only sign of activity before the tab appears,
so a silent-looking editor for a minute is expected, not a failure. The debug log
records the elapsed time of every run.

## Debugging

The server appends to `~/.cache/zed-ai-lens/ai-lens.log`: the settings it received
at `initialize`, every `didOpen` with the process/skip decision, whether each
`applyEdit` was applied, and any agent failure. Zed only exposes LSP stderr
through an in-app viewer, so this file is usually the fastest way to see why
nothing happened — a `-> skip` line means your `include` globs did not match the
absolute path.

## Building

Requires `bun`, and `rustup` with the `wasm32-wasip2` target.

```sh
./build.sh                      # bundles server/src -> server/dist/index.cjs
cargo build --release --target wasm32-wasip2
cp target/wasm32-wasip2/release/zed_ai_lens.wasm extension.wasm
```

`build.sh` must run before the Rust build: the shim embeds `server/dist/index.cjs`
via `include_str!` at compile time, so the extension ships as a single wasm with
no runtime `npm install`.

The target must be `wasm32-wasip2`, not `wasip1`. Zed loads extensions as WASM
*components*; a `wasip1` build produces a plain core module and Zed rejects it
with `attempted to parse a wasm module with a component parser`. `wasip2` emits a
component directly, with no separate `wasm-tools component new` adapter step.

Install in Zed with `zed: install dev extension` from the command palette and
select this directory. Zed also treats a symlink in
`~/Library/Application Support/Zed/extensions/installed/<id>` as a dev extension,
which is handy for iterating: rebuild, then restart Zed.

## Limitations

- Only fires for languages listed in `extension.toml`; add more there if you need
  file types it does not cover.
- Processing is triggered on open only. To reprocess, close and reopen the file.
- No streaming — nothing appears until the agent finishes.
- Agent runs are serialised. Zed restores a session by opening every tab at once,
  and one agent per file in parallel is slow and expensive; the queue depth is in
  the debug log.
- Files over `maxAutoBytes` (20 KB) are not auto-translated, because a full pass
  over a large document takes minutes and the wait reads as a hang. The command
  palette action has no such limit.
- The output tab opens wherever Zed decides to put it. An LSP cannot ask for a
  specific split, so it lands as a normal tab rather than a pinned side pane.
- Because the tab is populated by an edit, it shows as modified. The content on
  disk is already correct, so saving it changes nothing.
