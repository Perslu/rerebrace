// noinspection Eslint
//import webpack from 'webpack'
//import path from 'path'
//import * as loaders from './loaders'
//import HtmlWebpackPlugin from 'html-webpack-plugin'
//import HappyPack from 'happypack'

const webpack = require('webpack')
const path = require('path')
const loaders = require('./loaders-es5')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HappyPack = require('happypack')

//const ExtractTextPlugin = require("extract-text-webpack-plugin");

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';


const __root = path.join(__dirname, '../')
const __src = path.join(__root, 'src/apps/chat')
const PATHS = {
  assets: path.join(__src, 'frontend/assets'),
  frontend: path.join(__src, 'frontend/web'),
  buildTarget: path.join(__root, 'build/bundles'),
  dllTarget: path.join(__root, 'build/dll'),
}

// noinspection Eslint
module.exports = {
  cache: true,
  performance: {
    hints: false
  },
  devtool: isProd ? 'hidden-source-map' : 'source-map',
  context: PATHS.frontend,
  entry: {
    app: ['webpack-hot-middleware/client', 'react-hot-loader/patch', './index.js'],
    //vendor: ['react', 'react-icons']//'webpack-hot-middleware/mobile', 'react-hot-loader/patch'],
    //vendor: ['react']
  },
  output: {
    publicPath: '/bundles/',
    path: PATHS.buildTarget,
    filename: "[name].js",
    chunkFilename: '[name]-[chunkhash].js',
    //filename: "[name].bundle.js",
    //library: "[name]_lib"
    
  },
  module: {
    rules: [
      //loaders.htmlLoader,
      //loaders.cssLoader,
      loaders.jsLoader,
      loaders.imageLoader,
      //loaders.fontLoader,
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      PATHS.frontend,
      //path.resolve(__root, '/src/mobile'),
      //path.resolve(__root, 'node_modules'),
      'node_modules',
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      _CHAT_API_: "'ws://localhost:4000/socket'",
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
      context: PATHS.dllTarget,
      manifest: require(path.join(PATHS.dllTarget, 'main-manifest.json'))
    }),
    new HtmlWebpackPlugin({
      title: "Perslu",
      template: 'index.ejs',
    }),
    new HappyPack({
      loaders: ['babel-loader']
    }),
    

  ],
  devServer: {
    contentBase: PATHS.frontend,
    // hot: true
  },
};


