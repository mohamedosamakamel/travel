module.exports = {
  apps: [
    {
      name: 'Nest App',
      script: './dist/main.js',
      instances: '4',
      exec_mode: 'cluster',
      autorestart: true,
    },
  ],
};
