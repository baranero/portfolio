const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
