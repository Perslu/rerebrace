const webpack = require('webpack')
const path = require('path')

const __root = path.join(__dirname, '../')
const __src = path.join(__root, 'src')
const PATHS = {
  assets: path.join(__src, 'mobile/assets'),
  mobile: path.join(__src, 'mobile'),
  buildTarget: path.join(__root, 'build/bundles'),
  dllTarget: path.join(__root, 'build/dll'),
}
//'framework': ['react', 'react-dom', 'react-proxy'],
//  'router': ['react-router/es6'],
//  'redux': ['redux', 'react-redux', 'react-router-redux', 'redux-form'],
//  'utils': ['ramda', 'lodash-es', 'jss', 'axios', 'moment'],
module.exports = {
  devtool: "source-map",
  entry: {
    'main': [
      'react-hot-loader',
      'react-hot-loader/lib',
      
      
      'react',
      'react-dom',
      'react-proxy',
      'react-router/es6',
      'react-router/lib',
      'redux',
      'react-redux',
      'react-router-redux',
      'redux-form',
      'ramda',
      'lodash-es',
      'jss',
      'axios',
      'moment',
      'react-masonry-layout',
      'react-jss',
      'nuka-carousel',
      'css-vendor',
      'bricks.js',
      'html-entities',
      'has-ansi',
      'setimmediate',
      'redux-thunk',
      'global',
      'escape-string-regexp',
      'ansi-html',
      'ansi-styles',
      'strip-ansi',
      'ansi-regex',
      'chalk',
      'react-icon-base',
      'react-icon-base/lib',
  
    ],
  },
  
  output: {
    filename: '[name].dll.js',
    path: PATHS.dllTarget,
    library: '[name]'
  },
  
  plugins: [
    new webpack.DllPlugin({
      path: path.join(PATHS.dllTarget, '[name]-manifest.json'),
      name: '[name]',
      context: PATHS.dllTarget,
    })
  ]
  
}
