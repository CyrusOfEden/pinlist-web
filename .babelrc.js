module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: false,
        modules: false,
        targets: {
          chrome: "80",
          firefox: "75",
          opera: "36",
          edge: "79",
        },
      },
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties"],
    ["@babel/plugin-transform-destructuring", { useBuiltIns: true }],
    ["@babel/plugin-proposal-object-rest-spread", { useBuiltIns: true }],
    ["@babel/plugin-transform-runtime", { helpers: false, regenerator: true }],
  ],
}
