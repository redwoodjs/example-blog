const path = require("path");

module.exports = {
  extends: "../babel.config.js",
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "8.10.0"
        },
        useBuiltIns: "entry",
        corejs: 3
      }
    ]
  ],
  plugins: [
    [
      "babel-plugin-module-resolver",
      {
        alias: {
          src: path.join(__dirname, "src")
        }
      }
    ]
  ]
};
