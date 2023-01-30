const modeEnv = process.env.NODE_ENV;
console.log('modeEnv env', modeEnv);

export const environment = {
    production: false,
    setting: {
      baseApiUrl: modeEnv == 'development' ? 'http://localhost:60216/api' : 'http://10.20.241.108:4203/api',
      pageNumber: 1,
      pageSize: 10,
      signalrUrl: '//10.20.241.109:5000/gwsHub',
      idleSeconds: 1200,
      timeoutSeconds: 120
    }
};