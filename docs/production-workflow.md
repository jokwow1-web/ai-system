# Production Workflow

## Source Of Truth

- Local repository under `/Users/nicx/projects/ai-system` is the code source of truth.
- VPS under `/opt/ai-system` is the build and runtime source of truth.
- Do not edit production files manually on the VPS unless the change is committed back to Git.

## Local Gate

Before any push or deploy:

1. Ensure there are no uncommitted changes.
2. Run `npm ci`.
3. Run `npm run build`.
4. Only proceed if the build passes.

## First Deploy Reality Check

Run this manually on the VPS first. Do not use `scripts/deploy.sh` for the first boot.

1. Check runtime:
   - `node -v`
   - `npm -v`
   - `pm2 -v`
2. Create a clean folder:
   - `mkdir -p /opt/ai-system`
   - `cd /opt/ai-system`
3. Clone the repo:
   - `git clone https://github.com/jokwow1-web/ai-system.git app`
   - `cd app`
4. Set environment:
   - `mkdir -p /opt/ai-system/shared`
   - create `/opt/ai-system/shared/.env`
   - `ln -s /opt/ai-system/shared/.env .env`
5. Install dependencies:
   - `npm ci`
6. Build:
   - `npm run build`
7. Run manually:
   - `npm run start`
   - verify with `curl localhost:3000`
8. Only after the manual run succeeds, move to PM2:
   - `pm2 start ecosystem.config.js`
   - or `pm2 start npm --name "ai-system-web" -- run start`
9. Save startup state:
   - `pm2 save`
   - `pm2 startup`
10. Check health:
   - `pm2 status`
   - `pm2 logs --lines 20`
   - `curl localhost:3000`

If any of steps 1-7 fail, fix the environment before relying on automation.

## Deploy Contract

- Deploy only from `main`.
- The ongoing VPS deploy flow after the first manual boot must be:
  1. `git checkout main`
  2. `git pull --ff-only origin main`
  3. `npm ci`
  4. `npm run build`
  5. `pm2 startOrReload ecosystem.config.js --env production --update-env`
  6. Verify `pm2 status`, recent logs, and an HTTP health check.

## Runtime Contract

- Production env lives in `/opt/ai-system/shared/.env`.
- PM2 process name is `ai-system-web`.
- Runtime command is `npm run start`.

## Rollback Contract

- Rollback is code/config only.
- Rollback must target a Git commit.
- After checkout, rebuild and restart PM2.
- No schema or data rollback is part of this workflow.
