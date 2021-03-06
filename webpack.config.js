const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/client/index.tsx",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: path.join("public", "index.html") }),
  ],
  output: {
    path: path.join(__dirname, "dist", "client"),
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src", "client"),
      "@common": path.resolve(__dirname, "src", "common"),
    },
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "public"),
    proxy: {
      "/api": "http://localhost:5000",
    },
    stats: "minimal",
  },
  module: {
    rules: [
      // Typescript files
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.client.json",
        },
      },
      // CSS
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
};
