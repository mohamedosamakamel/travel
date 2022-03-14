module.exports = {
    apps: [
      {
        name: 'Nest App 4',
        script: './dist/main.js',
        instances: '2',
        exec_mode: 'cluster',
        autorestart: true
        },
      },
    ]
  };
  
  