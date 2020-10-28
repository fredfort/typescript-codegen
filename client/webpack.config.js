const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
// const { NormalModuleReplacementPlugin } = require("webpack");

module.exports = (env = {}) => ({
  mode: "development",
  devtool: "inline-source-map",
  entry: path.join(__dirname, "src/index.tsx"),
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: "8081",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: "src/index.html",
      dateCreation: new Date(),
      baseHref: "/",
    }),
    // env.useRealAPI
    //   ? new NormalModuleReplacementPlugin(/campaignMockAPI\.ts/, "./api.ts")
    //   : () => {},
  ],
});
