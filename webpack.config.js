const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module : {
    rules : [
      {
        // transpile .js / .jsx code
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        } 
      },
      {
        // transpile .scss .sass code
        test: /\.s[ac]ss$/i,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  },
  plugins : [
    //html plugin
    new HtmlWebpackPlugin({
        template: './client/index.html',
        filename: './index.html'
    }),
    // //copy web pack plugin
    // new CopyWebpackPlugin({
    //   patterns: [{ from: './client/style.scss', to: './' }],
    // })
  ], 
  devServer:{
    publicPath: '/', // could be / or /build (check when dev server runs) (e.g., http//:localhost:8080/)
    compress: true,
    port: 8080,
    // open  // uncomment if -open doesn't work during npm run dev 
    proxy: {
      '/' : 'http://localhost:3000'
    } 
  }
}