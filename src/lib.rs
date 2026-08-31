use zed_extension_api as zed;

struct AiLensExtension;

impl zed::Extension for AiLensExtension {
    fn new() -> Self {
        AiLensExtension
    }

    fn language_server_command(
        &mut self,
        _language_server_id: &zed::LanguageServerId,
        worktree: &zed::Worktree,
    ) -> Result<zed::Command, String> {
        let work_dir =
            std::env::current_dir().map_err(|e| format!("failed to get work dir: {e}"))?;

        // The server is bundled to a single file at build time, so there is no
        // npm install at runtime. Always overwrite so an updated dev build wins.
        let dist_dir = work_dir.join("dist");
        std::fs::create_dir_all(&dist_dir).map_err(|e| format!("failed to create dist: {e}"))?;

        let server_entry = dist_dir.join("index.cjs");
        std::fs::write(&server_entry, include_str!("../server/dist/index.cjs"))
            .map_err(|e| format!("failed to write index.cjs: {e}"))?;

        // Prefer the user's bun; fall back to the node Zed ships with.
        let command = worktree
            .which("bun")
            .unwrap_or(zed::node_binary_path()?);

        Ok(zed::Command {
            command,
            args: vec![
                server_entry.to_string_lossy().to_string(),
                "--stdio".to_string(),
            ],
            env: worktree.shell_env(),
        })
    }
}

zed::register_extension!(AiLensExtension);
