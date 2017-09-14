const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    resolve(__dirname, "src", "index.jsx")
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  devtool: '#source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: [ '.js', '.jsx' ]
  },

  module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: [
              ["es2015", {"modules": false}],
              "react",
            ],
            plugins: [
              "react-hot-loader/babel"
            ]
          }
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            'url-loader?limit=10000'
          ]
        }
      ]
    },

    plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template:'template.ejs',
      appMountId: 'react-app-root',
      title: 'tamagotchi',
      filename: resolve(__dirname, "build", "index.html"),
    }),
  ],

};
