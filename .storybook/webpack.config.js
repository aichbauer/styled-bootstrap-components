const path = require('path');

module.exports = function ({ config }) {
  config.module.rules.push({
    // test: /\.stories\.jsx?$/,
    test: /\.jsx?$/,
    include: path.resolve('./stories'),
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  return config;
};
