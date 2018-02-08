const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/dist/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:{
          presets:['es2015']
        }
      },{
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },{
        test: /\.styl$/,
        loader: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ]
      },{
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader?limit=100000',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.styl']
  }
};