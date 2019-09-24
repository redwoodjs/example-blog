const path = require("path");

module.exports = {
  extends: "../babel.config.js",
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
