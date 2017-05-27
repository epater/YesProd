const webpack = require("webpack"),
      path = require("path"),
      ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // SASS compilation
  // Entry
  entry: {
    sass: "./dev/sass/style.scss",
  },

  // Output
  output: {
    path: path.join(__dirname, "./"),
    filename: "bundle.js"
  },

  // Loaders
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(svg|ttf|woff)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]"
        }
      }
    ]
  },

  // Plugins
  plugins: [
    new ExtractTextPlugin("./style.css"),
  ],

  // Watch over changes
  // watch: true,
};