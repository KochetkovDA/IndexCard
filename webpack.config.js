const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
  },
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, '/dist'),
    hot: true,
    port: 9000,
    overlay: true,
    watchOptions: {
      aggregateTimeout: 600,
      poll: 1000,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/app/index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
