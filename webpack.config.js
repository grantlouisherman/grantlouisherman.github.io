const CompressionPlugin = require('compression-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './minified/index.min.js',
    './minified/index.min.css',
    './scripts/amazeui.js'
  ],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "script-loader",
          options: {
            sourceMap: true,
          }
        }
      },
      {
        test: /\.css$/,
        use: [{
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'async'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: "bundle.js"
  },
}
