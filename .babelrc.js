module.exports = {
  presets: [
    [
      // Latest stable ECMAScript features
      "@babel/preset-env",
      {
        useBuiltIns: false,
        // Do not transform modules to CJS
        modules: false,
        targets: {
          chrome: "49",
          firefox: "52",
          opera: "36",
          edge: "79",
        },
      },
    ],
    "@babel/typescript",
    "@babel/react",
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "antd",
        style: true,
      },
    ],
    ["@babel/plugin-proposal-class-properties"],
    [
      "@babel/plugin-transform-destructuring",
      {
        useBuiltIns: true,
      },
    ],
    [
      "@babel/plugin-proposal-object-rest-spread",
      {
        useBuiltIns: true,
      },
    ],
    [
      // Polyfills the runtime needed for async/await and generators
      "@babel/plugin-transform-runtime",
      {
        helpers: false,
        regenerator: true,
      },
    ],
  ],
}
