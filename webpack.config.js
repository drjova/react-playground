/* eslint-disable */
const path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'main.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
      test: /\.js$/,
      exclude: [
        path.resolve(__dirname, "node_modules"),
      ],
      loader: 'jshint-loader'
      }
    ],
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: [
        path.resolve(__dirname, "snode_modules"),
      ],
      include: [
        path.resolve(__dirname, "src"),
      ]
    }]
  },
  watch: true,
  colors: true,
  progress: true,
  debug: true,
}
