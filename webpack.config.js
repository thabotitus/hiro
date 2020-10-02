import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import * as path from 'path';
import webpack from 'webpack';

export const WEBPACK_CONFIG = {
  mode: 'development',
  entry: {
    'app.min': "./src/js/app.js"
  },
  output: {
    filename: '[name].js',
  },
  optimization: {
    minimize: false,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/,
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    })],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|esm)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
              "@babel/preset-env"
          ],
        },
      },
    ],
  }
};