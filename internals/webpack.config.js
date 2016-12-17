// noinspection Eslint
import webpack from 'webpack'
import path from 'path'
import * as loaders from './loaders'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HappyPack from 'happypack'


//const ExtractTextPlugin = require("extract-text-webpack-plugin");

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';


const __root = path.join(__dirname, '../')
const __src = path.join(__root, 'src')
const PATHS = {
  assets: path.join(__src, 'mobile/assets'),
  mobile: path.join(__src, 'mobile'),
  buildTarget: path.join(__root, 'build/bundles'),
  dllTarget: path.join(__root, 'build/dll'),
}

// noinspection Eslint
export default {
  cache: true,
  performance: {
    hints: false
  },
  devtool: isProd ? 'hidden-source-map' : 'source-map',
  context: PATHS.mobile,
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
      loaders.htmlLoader,
      loaders.cssLoader,
      loaders.jsLoader,
      loaders.imageLoader,
      //loaders.fontLoader,
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      PATHS.mobile,
      //path.resolve(__root, '/src/mobile'),
      //path.resolve(__root, 'node_modules'),
      'node_modules',
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoErrorsPlugin(),
    //new ExtractTextPlugin("styles.css"),
    new webpack.DllReferencePlugin({
      context: PATHS.dllTarget,
      manifest: require(path.join(PATHS.dllTarget, 'main-manifest.json'))
    }),
    //new webpack.DllReferencePlugin({
    //  context: PATHS.dllTarget,
    //  manifest: require(path.join(PATHS.dllTarget, 'router-manifest.json'))
    //}),
    //new webpack.DllReferencePlugin({
    //  context: PATHS.dllTarget,
    //  manifest: require(path.join(PATHS.dllTarget, 'redux-manifest.json'))
    //}),
    //new webpack.DllReferencePlugin({
    //  context: PATHS.dllTarget,
    //  manifest: require(path.join(PATHS.dllTarget, 'utils-manifest.json'))
    //}),
    //new webpack.optimize.CommonsChunkPlugin({
    //  name: 'vendor',
    //  minChunks: Infinity,
    //  filename: 'vendor-common.js'
    //}),
    new HtmlWebpackPlugin({
      title: "Perslu",
      template: 'index.ejs',
    }),
    new HappyPack({
      loaders: ['babel-loader']
    }),
    //new webpack.DllPlugin({
    //  path: path.join(__dirname, "./assets", "[name]-manifest.json"),
    //  name: "[name]_lib"
    //}),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    //   debug: false
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   output: {
    //     comments: false
    //   },
    //   sourceMap: false
    // }),
    // new webpack.DefinePlugin({
    //   'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    // })
  ],
  devServer: {
    contentBase: PATHS.mobile,
    // hot: true
  },
};

module.exports = exports.default
