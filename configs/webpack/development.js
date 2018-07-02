const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');
const {resolve} = require('path');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    library: 'UserList',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: resolve(__dirname, 'dist/app'),
    filename: 'index.js',
    publicPath: '/'
  },
  entry: [
    'react-hot-loader/patch', // activate HMR for React
    'webpack-dev-server/client?http://localhost:3000',// bundle the client for webpack-dev-server and connect to the provided endpoint
    'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    './index.tsx' // the entry point of our app
  ],
  devServer: {
    historyApiFallback: true,
    hot: true, // enable HMR on the server
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new uglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ],
});
