var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '..', 'client', 'index'),
  output: {
    path: path.join(__dirname, '..', 'build', 'static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[path]---[name]---[local]---[hash:base64:5]'),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin( 'bundle.css' ),
  ]
};
