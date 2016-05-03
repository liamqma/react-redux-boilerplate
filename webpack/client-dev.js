var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: path.join(__dirname, '..', 'client', 'index.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'react-hmre'],
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules&localIdentName=[path]---[name]---[local]---[hash:base64:5]'],
      }
    ]
  }
};
