// noinspection Eslint
const webpack = require('webpack');
const path = require('path');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const PATHS = {
  assets: path.join(__dirname, './assets')
}
// noinspection Eslint
module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'source-map',
  context: path.join(__dirname, '../src/mobile'),
  entry: {
    js: ['webpack-hot-middleware/client', 'react-hot-loader/patch', './index.js'],
    //vendor: ['react', 'react-icons']//'webpack-hot-middleware/mobile', 'react-hot-loader/patch'],
    //vendor: ['react']
  },
  output: {
    publicPath: '/assets/',
    path      : path.join(__dirname, './assets'),
    filename  : "[name].bundle.js",
    //filename: "[name].bundle.js",
    //library: "[name]_lib"

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
        include: [
          path.resolve(__dirname, "../src"),
          path.resolve(__dirname, "../node_modules/react-icons"),
        ],
        //exclude: /node_modules\/(?!react-icons|nexttoskip).*/,
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
        test: /\.(png|jpg|gif|svg)/,
        //loader: 'url?limit=10000',
        loader: 'file?name=[name].[hash].[ext]',
        //include: [PATHS.assets],
        //options: {
        //  name: '[path][name].[ext]',
        //},
      },
      //{
      //  loader: 'url?limit=100000',
      //  test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
      //  include: path.resolve(__dirname, PATHS.assets),
      //}
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
		//new webpack.NoErrorsPlugin(),
    //new ExtractTextPlugin("styles.css"),
     new webpack.optimize.CommonsChunkPlugin({
       name: 'vendor',
       minChunks: Infinity,
       filename: 'vendor.bundle.js'
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
    contentBase: '../src/mobile',
    // hot: true
  },
};
