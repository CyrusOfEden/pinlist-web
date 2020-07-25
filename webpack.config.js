const fs = require("fs")
const path = require("path")
const webpack = require("webpack")
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
const DotenvPlugin = require("dotenv-webpack")

const mode = process.env.NODE_ENV || "development"

const sourcePath = path.join(__dirname, "src")
const distPath = path.join(__dirname, "dist", "extension")

const targetBrowser = process.env.TARGET_BROWSER
const targetBrowserExtensionFileType =
  { opera: "crx", firefox: "xpi" }[targetBrowser] || "zip"

const { SourceMapDevToolPlugin, EnvironmentPlugin } = webpack

module.exports = {
  mode,
  devtool: mode === "development" ? "inline-cheap-source-map" : false,
  stats: {
    all: false,
    builtAt: true,
    errors: true,
    hash: true,
  },
  entry: {
    manifest: path.join(sourcePath, "manifest.json"),
    overlay: path.join(sourcePath, "overlay", "index.tsx"),
    background: path.join(sourcePath, "background", "index.ts"),
    contentScript: path.join(sourcePath, "content-script", "index.ts"),
  },
  output: {
    path: path.join(distPath, targetBrowser),
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
        type: "javascript/auto",
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
            options: { hmr: mode === "development" },
          },
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new WextManifestWebpackPlugin(),
    // Generate sourcemaps
    new SourceMapDevToolPlugin({ filename: false }),
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
      eslint: true,
      eslintOptions: { cache: true },
      measureCompilationTime: true,
    }),
    // environmental variables
    new EnvironmentPlugin(["NODE_ENV", "TARGET_BROWSER"]),
    new DotenvPlugin({ path: `./.env.${mode}`, expand: true }),
    // delete previous build files
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.join(distPath, targetBrowser),
        path.join(
          distPath,
          `${targetBrowser}.${targetBrowserExtensionFileType}`,
        ),
      ],
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, "overlay.html"),
      inject: "body",
      chunks: ["overlay"],
      filename: "overlay.html",
    }),
    // Write css files to the build folder
    new MiniCssExtractPlugin({ filename: "css/[name].css" }),
    // copy static assets
    new CopyWebpackPlugin([{ from: "assets", to: "assets" }]),
    // plugin to enable browser reloading in development mode
    mode === "development"
      ? new ExtensionReloader({
          port: 9090,
          reloadPage: true,
          entries: {
            contentScript: "content-script",
            background: "background",
            extensionPage: ["overlay"],
          },
        })
      : { apply() {} },
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        extractComments: false,
        parallel: true,
        terserOptions: { output: { comments: false } },
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
      }),
      new ZipPlugin({
        path: distPath,
        extension: targetBrowserExtensionFileType,
        filename: targetBrowser,
      }),
    ],
  },
}
