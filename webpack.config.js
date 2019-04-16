const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';

const outputDir = dev ? 'dist' : 'build';

module.exports = {
  entry: './src/js/app.js',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, `${outputDir}`),
    filename: '[name].bundle.js',
  },
  mode: dev ? 'development' : 'production',
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
    historyApiFallback: true,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [new HtmlWebpackPlugin({
    title: 'Expensify App',
    filename: 'index.html',
    template: path.resolve(__dirname, './src/index.html'),
    inject: 'body',
  })],
};
