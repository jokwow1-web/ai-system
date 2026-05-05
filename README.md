# AI System

Next.js app with a strict local-to-VPS production workflow.

## Scripts

- `npm run dev` - local development
- `npm run build` - production build
- `npm run start` - production server
- `npm run lint` - lint the codebase

## Production Rules

- Local repo is the source of truth for code.
- VPS is the source of truth for build and runtime.
- Deploy only from `main`.
- Build must pass locally before any push.
- Production deploys rebuild on the VPS with `npm ci` and `npm run build`.
- Rollbacks are Git commit based.
- Any stability workaround must be documented in [docs/stability-notes.md](docs/stability-notes.md).
- The first VPS deploy is manual and must follow [docs/production-workflow.md](docs/production-workflow.md) exactly.

See [docs/production-workflow.md](docs/production-workflow.md) for the full contract.
