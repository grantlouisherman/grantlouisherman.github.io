const CompressionPlugin = require('compression-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './scripts/events.js',
    './scripts/personel-links.js',
    './scripts/Sections.js',
    './scripts/amazeui.js',
    "./css/sections.css",
    "./css/tag.css",
    "./css/tooltip.css",
    "./css/responsive.css"
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
    new HtmlWebpackPlugin({
      title: 'Caching'
     })
  ],
  output: {
    filename: "bundle.js",
    filename: '[name].[contenthash].js',
  },
}
