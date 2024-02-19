module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@src': './src',
          '@lib': './src/lib',
          '@components': './src/components',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@redux': './src/redux',
        },
      },
    ],
  ],
};
