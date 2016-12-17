import path from 'path'
const PATHS = {
  assets: path.join(__dirname, './assets')
}

export const cssLoader = {
  test: /\.css$/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
  ],
}

export const jsLoader = {
  test: /\.(js|jsx)$/,
  include: [
    path.resolve(__dirname, "../src"),
    path.resolve(__dirname, "../node_modules/react-icons"),
  ],
  //exclude: /node_modules\/(?!react-icons|nexttoskip).*/,
  use: [
    //{ loader: 'react-hot-loader' },
    //{ loader: 'babel-loader' },
    { loader: 'happypack/loader'}
  ],
}

export const htmlLoader = {
  test: /\.html$/,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]',
  },
}

export const imageLoader = {
  test: /\.(png|jpg|gif|svg)/,
  //loader: 'url?limit=10000',
  loader: 'file-loader?name=[name].[hash].[ext]',
  //include: [PATHS.assets],
  //options: {
  //  name: '[path][name].[ext]',
  //},
}

export const fontLoader = {
  loader: 'url?limit=100000',
  test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
  include: path.resolve(__dirname, PATHS.assets),
}
