const fs = require("fs")
const path = require("path")
const webpack = require("webpack")
const AntdDayJSWebpackPlugin = require("antd-dayjs-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const ExtensionReloader = require("webpack-extension-reloader")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const TypescriptConfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const WextManifestWebpackPlugin = require("wext-manifest-webpack-plugin")
const ZipPlugin = require("zip-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const lessVarsToJs = require("less-vars-to-js")

const env = process.env.NODE_ENV || "development"

const sourcePath = path.join(__dirname, "src")
const destPath = path.join(__dirname, "extension")

const targetBrowser = process.env.TARGET_BROWSER
const targetBrowserExtensionFileType =
  { opera: "crx", firefox: "xpi" }[targetBrowser] || "zip"

module.exports = {
  devtool: false, // https://github.com/webpack/webpack/issues/1194#issuecomment-560382342

  stats: {
    all: false,
    builtAt: true,
    errors: true,
    hash: true,
  },

  mode: env,

  entry: {
    manifest: path.join(sourcePath, "manifest.json"),
    app: path.join(sourcePath, "App", "index.tsx"),
    popup: path.join(sourcePath, "Popup", "index.tsx"),
    background: path.join(sourcePath, "Background", "index.ts"),
    contentScript: path.join(sourcePath, "ContentScript", "index.ts"),
  },

  output: {
    path: path.join(destPath, targetBrowser),
    filename: "dist/[name].bundle.js",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    plugins: [new TypescriptConfigPathsPlugin()],
    alias: {
      "^~/(.*)$": "src/$1",
      "webextension-polyfill-ts": path.resolve(
        path.join(__dirname, "node_modules", "webextension-polyfill-ts"),
      ),
    },
  },

  module: {
    rules: [
      {
        type: "javascript/auto", // prevent webpack handling json with its own loaders,
        test: /manifest\.json$/,
        use: {
          loader: "wext-manifest-loader",
          options: {
            usePackageJSONVersion: true,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(js|ts)x?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: env === "development" },
          },
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
              lessOptions(loader) {
                const themeFiles = ["colors.less", "theme.less"].map((f) =>
                  path.resolve(__dirname, "src", "StyleSheets", f),
                )

                for (const file of themeFiles) {
                  loader.addDependency(file)
                }

                const themeVars = themeFiles
                  .map((f) => fs.readFileSync(f, "utf-8").toString())
                  .map(lessVarsToJs)
                  .reduce(Object.assign, {})

                return {
                  javascriptEnabled: true,
                  modifyVars: themeVars,
                }
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // Plugin to not generate js bundle for manifest entry
    new WextManifestWebpackPlugin(),
    // Generate sourcemaps
    new webpack.SourceMapDevToolPlugin({ filename: false }),
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
      eslint: true,
      eslintOptions: { cache: true },
      measureCompilationTime: true,
      tsconfig: path.resolve("tsconfig.json"),
    }),
    // environmental variables
    new webpack.EnvironmentPlugin(["NODE_ENV", "TARGET_BROWSER"]),
    // delete previous build files
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.join(process.cwd(), `extension/${targetBrowser}`),
        path.join(
          process.cwd(),
          `extension/${targetBrowser}.${targetBrowserExtensionFileType}`,
        ),
      ],
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, "App", "app.html"),
      inject: "body",
      chunks: ["app"],
      filename: "app.html",
    }),
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, "Popup", "popup.html"),
      inject: "body",
      chunks: ["popup"],
      filename: "popup.html",
    }),
    // Write css files to the build folder
    new MiniCssExtractPlugin({ filename: "css/[name].css" }),
    // copy static assets
    new CopyWebpackPlugin([{ from: "assets", to: "assets" }]),
    // Replace Moment.js with Day.js
    new AntdDayJSWebpackPlugin(),
    // plugin to enable browser reloading in development mode
    env === "development"
      ? new ExtensionReloader({
          port: 9090,
          reloadPage: true,
          entries: {
            contentScript: "contentScript",
            background: "background",
            extensionPage: ["app", "popup"],
          },
        })
      : { apply() {} },
  ],

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
      }),
      new ZipPlugin({
        path: destPath,
        extension: targetBrowserExtensionFileType,
        filename: targetBrowser,
      }),
    ],
  },
}
