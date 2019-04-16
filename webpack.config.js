const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    port: '3000',
    hot: true,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [new HtmlWebpackPlugin({
    title: "Expensify App",
    filename: 'index.html',
    template: path.join(__dirname, '/dist/index.html')
  })],
};
