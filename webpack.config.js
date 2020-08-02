const webpack = require("webpack");

module.exports = {
  entry: {
    "bundle": "./src/linearjs.js",
    "bundle.min": "./src/linearjs.js",
  },
  devtool: "source-map",
  output: {
    path: __dirname + "/dist",
    filename: "linearjs.js"
  }
};
