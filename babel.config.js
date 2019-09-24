module.exports = {
  presets: [
    "@babel/preset-react",
    "@babel/typescript",
    [
      // @babel/preset-env does not support stage-x plugins
      "@babel/preset-env",
      {
        targets: {
          node: true
        },
        useBuiltIns: "usage",
        corejs: 3
      }
    ]
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-export-default-from"],
    ["@babel/plugin-proposal-object-rest-spread"]
  ]
};
