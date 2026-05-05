const path = require("node:path")

const appRoot = process.env.AI_SYSTEM_APP_DIR || path.resolve(__dirname)
const sharedEnvFile = process.env.AI_SYSTEM_ENV_FILE || path.join(appRoot, "..", "shared", ".env")

module.exports = {
  apps: [
    {
      name: "ai-system-web",
      cwd: appRoot,
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env_file: sharedEnvFile,
      env: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: process.env.PORT || 3000,
      },
      autorestart: false,
      max_restarts: 10,
      kill_timeout: 10000,
      time: true,
    },
  ],
}
