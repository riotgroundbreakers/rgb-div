'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// var webpack = require('webpack');
var path = require('path');

// currently, this is for bower
var config = {
  devtool: 'sourcemap',
  entry: {
    index: './src/rgb-div.js'
  },
  output: {
    path: path.join(__dirname, 'lib'),
    publicPath: 'lib/',
    filename: 'rgb-div.js',
    sourceMapFilename: 'rgb-div.map',
    library: 'RgbDiv',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)/,
      use: 'babel-loader'
    }]
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'styled-components': {
      root: 'styled',
      commonjs2: 'styled-components',
      commonjs: 'styled-components',
      amd: 'styled-components'
    },
  },
};

module.exports = config;