// noinspection Eslint
const webpack = require('webpack');
const path = require('path');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

// noinspection Eslint
module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'source-map',
  context: path.join(__dirname, '../src/mobile'),
  entry: {
    js: ['./index.js', 'webpack-hot-middleware/client', 'react-hot-loader/patch'],
    // vendor: ['react', 'webpack-hot-middleware/mobile', 'react-hot-loader/patch'],
  },
  output: {
    path: path.join(__dirname, './static'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'file',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style'},
          {loader: 'css'},
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          //{ loader: 'react-hot' },
          { loader: 'babel-loader' },
        ],
      },
      //{ test: /\.css$/,
      //  loader: ExtractTextPlugin.extract({loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'})
      //},
      {
        test: require.resolve("ramda"),
        loader: "expose?R"
      },
      {
        test: /\.png/,
        loader: 'file',
        options: {
          name: '[path][name].[ext]',
        },
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('../src/mobile'),
      '../node_modules',
    ],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
    //new ExtractTextPlugin("styles.css"),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: Infinity,
    //   filename: 'vendor.bundle.js'
    // }),
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
    contentBase: '../src/mobile',
    // hot: true
  },
};
