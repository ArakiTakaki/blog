// const path = require('path');
// const { APP_ENV = 'local' } = process.env;

module.exports = {
  // excludeFile: (str) => /(stories|test|spec)\.(tsx|ts|js|jsx)$/.test(str),
  // webpack(config) {
  //   config.resolve.alias = Object.assign(config.resolve.alias, {
  //     '~': './src',
  //     style: './src/assets/css',
  //   });
  //   return config;
  // },
  // proxy設定
  // async rewrites() {
  //   return proxies();
  // },
  // env: {
  //   APP_ENV,
  // },
  future: {
    webpack5: true,
  },
};
