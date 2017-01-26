const path = require('path')

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
  resolve: {
    alias: {
      'UI': path.join(PATHS.mobile, '/UI'),
      'library-name': './library-folder/folder'
    }
  }
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
