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

## Deploy Contract

- Deploy only from `main`.
- VPS deploy flow must be:
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
