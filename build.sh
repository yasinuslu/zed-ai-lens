#!/usr/bin/env bash
# Bundle the LSP server. The Rust shim embeds server/dist/index.cjs at compile
# time, so this must run before Zed rebuilds the extension.
set -euo pipefail
cd "$(dirname "$0")/server"
bun install
bun run build
echo "Server bundled to server/dist/index.cjs"
