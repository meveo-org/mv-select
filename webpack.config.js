const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './demo.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'demo-mv-select.js',
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./index.html"
  })],
};