const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const config = {
  entry: {
    content: "./src/content_script/content.js",
    background: "./src/Background/background.js",
    react: "./src/react/index.jsx",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "manifest.json", to: "manifest.json" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
    ],
  },
};

module.exports = config;
