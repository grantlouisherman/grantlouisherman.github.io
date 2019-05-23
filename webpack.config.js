const CompressionPlugin = require('compression-webpack-plugin');

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
  output: {
    filename: "bundle.js",
    chunkFilename: 'chunk.bundle.js',
  },
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
    new CompressionPlugin()
  ]
}
