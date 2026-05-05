module.exports = {
  apps: [
    {
      name: "ai-system-web",
      cwd: "/opt/ai-system",
      script: "npm",
      args: "run start",
      env_file: "/opt/ai-system/shared/.env",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      autorestart: true,
      max_restarts: 10,
      time: true,
    },
  ],
}
