module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ["module-resolver", {
      "root": ['./src'],
      "alias": {
        '@configs': './src/configs',
        '@constants': './src/constants',
        '@navigations': './src/navigations',
        '@components': './src/components',
        '@screens': './src/screens',
        '@utils': './src/utils',
        '@redux': './src/redux',
        '@themes': './src/themes',
        '@models': './src/models'
      }
    },
    ],
  ],
};
