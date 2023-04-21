const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './rainbowBrackets.js',
  output: {
    filename: 'rainbowBrackets.min.js',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};