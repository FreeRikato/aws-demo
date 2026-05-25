module.exports = {
  apps: [{
    name: "myapp",
    script: "dist/index.js",
    cwd: "/home/ec2-user/app",
    instances: 1,
    exec_mode: "fork",
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: "production",
      PORT: 3000
    }
  }]
}