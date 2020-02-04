module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '#root': './build',
        },
      },
    ],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
};
