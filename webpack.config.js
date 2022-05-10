const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  watch: true,
  watchOptions: {
    poll: true,
  },
  entry: {
    index: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant Page",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
