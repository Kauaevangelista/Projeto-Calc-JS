const path = require("path");

module.exports = {
  entry: {
    index: "./src/javascript/index.js",
    calculate: "./src/javascript/calculate.js",
    copyToClipboard: "./src/javascript/copyToClipboard.js",
    keyhandlers: "./src/javascript/keyhandlers.js",
    switchTheme: "./src/javascript/switchTheme.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].min.js",
  },
};
