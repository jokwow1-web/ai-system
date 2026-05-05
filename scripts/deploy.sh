#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${AI_SYSTEM_APP_DIR:-$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)}"
SHARED_ENV="${AI_SYSTEM_ENV_FILE:-$(cd "$APP_DIR/.." && pwd)/shared/.env}"
PROCESS_NAME="ai-system-web"
HEALTHCHECK_URL="${HEALTHCHECK_URL:-http://127.0.0.1:3000/sbu}"

if [ ! -f "$SHARED_ENV" ]; then
  echo "Missing shared env file: $SHARED_ENV" >&2
  exit 1
fi

cd "$APP_DIR"

if [ -n "$(git status --porcelain)" ]; then
  echo "Refusing to deploy from a dirty working tree." >&2
  git status --short
  exit 1
fi

git checkout main
git pull --ff-only origin main

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

echo "Deploy complete."
