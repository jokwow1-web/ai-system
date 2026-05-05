#!/usr/bin/env bash
set -euo pipefail

BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_DIR="$BASE_DIR"
PROCESS_NAME="ai-system-web"
HEALTHCHECK_URL="${HEALTHCHECK_URL:-http://127.0.0.1:3000/sbu}"
TARGET_COMMIT="${1:-}"

cd "$APP_DIR"

if [ -z "$TARGET_COMMIT" ]; then
  git log --oneline --decorate -n 20
  read -r -p "Rollback commit: " TARGET_COMMIT
fi

if [ -z "$TARGET_COMMIT" ]; then
  echo "No rollback target provided." >&2
  exit 1
fi

git checkout --force "$TARGET_COMMIT"

npm ci
npm run build

pm2 startOrReload app/ecosystem.config.js --env production --update-env
sleep 5
pm2 status
pm2 logs "$PROCESS_NAME" --lines 20 --nostream || true

node <<'NODE'
const { execFileSync } = require("node:child_process")
const output = execFileSync("pm2", ["jlist"], { encoding: "utf8" })
const list = JSON.parse(output)
const proc = list.find((item) => item.name === "ai-system-web")
if (!proc) {
  console.error("PM2 process ai-system-web not found")
  process.exit(1)
}
if (proc.pm2_env.status !== "online") {
  console.error(`PM2 process not online: ${proc.pm2_env.status}`)
  process.exit(1)
}
NODE

curl -fsSL "$HEALTHCHECK_URL" >/dev/null

echo "Rollback complete."
