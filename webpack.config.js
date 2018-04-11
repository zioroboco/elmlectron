const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: [
    `webpack-dev-server/client?http://localhost:8080`,
    path.resolve(__dirname, "src/index.js"),
  ],
  resolve: {
    extensions: [ ".js", ".elm" ]
  },
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [ /elm-stuff/, /node_modules/ ],
        loader: "elm-webpack-loader?verbose=true&warn=true"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "static/index.html")
    })
  ]
}
