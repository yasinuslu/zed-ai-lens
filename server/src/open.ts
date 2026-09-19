import { spawn } from "child_process";

/**
 * Open a file in the running Zed as an ordinary tab.
 *
 * This deliberately shells out to the `zed` binary instead of asking the editor
 * through LSP. `workspace/applyEdit` was the only way to make Zed surface a
 * document, but it does not open a file tab — it opens an "LSP Edit" multibuffer
 * with an *Open File* button, which is not a document view and is awkward to
 * work with. It also has to truncate the file to do it, which forces the file to
 * be writable at the moment Zed loads it, and Zed decides a buffer's read-only
 * capability from file permissions exactly then.
 *
 * Going through the CLI avoids both problems at once: nothing truncates the
 * file, so a `0444` output is loaded as a genuinely read-only buffer, and what
 * opens is a normal tab.
 *
 * `--existing`, not `--add`: `--add` makes the file a root of the workspace, so
 * every translation showed up as its own entry in the project panel, was saved
 * with the workspace and came back on every restart, and started another
 * language server rooted at its cache directory. `--existing` opens the same
 * tab in the current window without adding a root.
 */
export function openInZed(filePath: string, binary = "zed"): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      const child = spawn(binary, ["--existing", filePath], {
        detached: true,
        stdio: "ignore",
      });
      child.on("error", () => resolve(false));
      child.on("spawn", () => {
        child.unref();
        resolve(true);
      });
    } catch {
      resolve(false);
    }
  });
}
