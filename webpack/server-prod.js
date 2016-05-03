var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var query = require('./server-babel-config');

module.exports = {
  entry: path.join(__dirname, '..', 'server', 'index'),
  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'server.js',
  },
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
  module: {
    loaders: [
      {
        test: /\.(js|css)$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: query,
      }
    ]
  }
};
