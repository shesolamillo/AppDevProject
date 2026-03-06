module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {},
  },
  plugins: [
    ['@babel/plugin-transform-react-jsx', { runtime: 'automatic', importSource: 'nativewind' }],
  ],
};
