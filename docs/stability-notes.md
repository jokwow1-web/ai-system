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
- Paths are derived from the repo location or overridable via `AI_SYSTEM_REPO_ROOT` and `AI_SYSTEM_ENV_FILE`.
- This keeps the config usable if the VPS path changes, while preserving a single documented process name and start command.

## Operational Rule

- Any workaround that exists for reliability must be documented here or in the relevant code file with a short rationale.
- If a workaround becomes permanent, it should be treated as a deliberate system decision, not a temporary patch.
