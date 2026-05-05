# Stability Notes

This repository intentionally uses a few stability workarounds. They are documented here so they can be revisited deliberately instead of becoming accidental framework forks.

## Why `npm run build` Uses `--webpack`

- Current local build validation must work without network access.
- Turbopack attempted to fetch remote assets and also hit sandbox-specific failures during build.
- Webpack gives a deterministic build path for this repo today.

Revisit this if:

- the build environment changes,
- the team wants Turbopack parity again,
- or we have a reproducible, documented way to make Turbopack work in all environments.

## Why Google Fonts Were Removed From Build Time

- `next/font/google` fetches font assets during build.
- That introduces a network dependency that makes local and VPS builds less predictable.
- The app now uses a local/system font stack instead.

Revisit this if:

- you want self-hosted local font files committed to the repo,
- or you want to reintroduce remote font fetching with a stable CI/VPS network contract.

## Why PM2 Config Is Generic

- The PM2 config is committed in the repo, but it should still be environment-aware.
- Paths are derived from the app directory or overridable via `AI_SYSTEM_APP_DIR` and `AI_SYSTEM_ENV_FILE`.
- The first manual VPS layout is `/opt/ai-system/app` for the code and `/opt/ai-system/shared/.env` for shared runtime env.
- PM2 launches Next directly instead of wrapping `npm run start` because the npm wrapper caused restart churn and port conflicts during the first VPS validation.
- The first manual deploy is still the source of truth for validating the VPS path and env layout before automation is trusted.

## Operational Rule

- Any workaround that exists for reliability must be documented here or in the relevant code file with a short rationale.
- If a workaround becomes permanent, it should be treated as a deliberate system decision, not a temporary patch.
