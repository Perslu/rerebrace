const path = require('path')
const loaders = require('./loaders-es5')
const nodeExternals = require('webpack-node-externals')

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';


const __root = path.join(__dirname, '../')
console.log("Root:", __root)
const __src = path.join(__root, 'src')
const PATHS = {
  assets: path.join(__src, 'mobile/assets'),
  mobile: path.join(__src, 'mobile'),
  buildTarget: path.join(__root, 'build/bundles'),
  dllTarget: path.join(__root, 'build/dll'),
}

module.exports = {
  output: {
    // sourcemap support for IntelliJ/Webstorm
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  resolve: {
    alias: {
      'UI': path.join(PATHS.mobile, '/UI'),
      'library-name': './library-folder/folder'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, "../src"),
          path.resolve(__dirname, "../node_modules/react-icons"),
        ],
        use: [
          { loader: 'babel-loader' },
        ],
      }
    ],
  },
  target: 'node', // webpack should compile node compatible code
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  devtool: 'source-map',
  //resolve: {
  //  extensions: ['.js', '.jsx'],
  //  modules: [
  //    PATHS.mobile,
  //    path.resolve(__root, '/src/mobile'),
  //    path.resolve(__root, 'node_modules'),
      //'node_modules',
    //],
  //},
};
