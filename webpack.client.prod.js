const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const clientConfig = {
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  mode: 'production',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: '[name]_[local]_[hash:base64:5]'
          }
        }]
      }
    ]
  }
}
module.exports = merge(config, clientConfig)
