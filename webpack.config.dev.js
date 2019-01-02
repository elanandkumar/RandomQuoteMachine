const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
  entry: {
    main: "./src/js/app.js"
  },
  devServer: {
    contentBase: "dist",
    progress: true,
    open: true,
    inline: true
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/env", "@babel/preset-react"] }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "main.js"
  },
  plugins: [
    new CleanWebpackPlugin("dist", {}),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./index.html",
      filename: "index.html"
    })
  ]
};
