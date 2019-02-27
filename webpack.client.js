const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { ReactLoadablePlugin } = require('react-loadable/webpack')


const clientConfig = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/'
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
  },
  plugins: [
    new ReactLoadablePlugin({
      filename:  path.resolve(__dirname, 'public', 'react-loadable.json')
    })
  ],
}
module.exports = merge(config, clientConfig)
