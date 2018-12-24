module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      '@babel/env',
      '@babel/react',
    ],
    overrides: [
      {
        test: '.packages/styled-config/src/**/*.js',
        presets: ['@babel/env'],
        plugins: [
          '@babel/plugin-proposal-object-rest-spread'
        ],
      }
    ]
  };
};
