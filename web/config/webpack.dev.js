/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const merge = require("webpack-merge");
const Dotenv = require("dotenv-webpack");
const { getHammerConfig } = require("@hammerframework/hammer-core");
const escapeRegExp = require("lodash.escaperegexp");

const common = require("./webpack.common.js");

const hammerConfig = getHammerConfig();

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "../dist"),
    port: hammerConfig.web.port,
    proxy: {
      [hammerConfig.web.apiProxyPath]: {
        target: `http://localhost:${hammerConfig.api.port}`,
        pathRewrite: {
          [`^${escapeRegExp(hammerConfig.web.apiProxyPath)}`]: ""
        }
      }
    }
  },
  plugins: [
    new Dotenv({
      path: `${hammerConfig.baseDir}/.env`
    })
  ]
});
