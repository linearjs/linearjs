const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    "bundle": "./src/linearjs.js",
    "bundle.min": "./src/linearjs.js",
  },
  devtool: "source-map",
  output: {
    path: path.join(path.resolve(), "dist"),
    filename: "[name].js"
  }
};
