const fs = require("fs")
const path = require("path")
const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const TypescriptConfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const WextManifestWebpackPlugin = require("wext-manifest-webpack-plugin")
const ZipPlugin = require("zip-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const DotenvPlugin = require("dotenv-webpack")

const env = process.env.NODE_ENV || "development"

const sourcePath = path.join(__dirname, "src")
const distPath = path.join(__dirname, "dist", "web")

const { SourceMapDevToolPlugin, EnvironmentPlugin } = webpack

module.exports = {
  mode: env,
  devtool: env === "development" ? "eval-source-map" : false,
  devServer: {
    contentBase: distPath,
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 1234,
  },
  stats: {
    all: false,
    builtAt: true,
    errors: true,
    hash: true,
  },
  entry: {
    app: path.join(sourcePath, "app", "App.tsx"),
  },
  output: {
    publicPath: "/",
    path: distPath,
    filename: "js/[name].bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    plugins: [new TypescriptConfigPathsPlugin()],
    alias: {
      "^~/(.*)$": "src/$1",
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
            options: { hmr: env === "development" },
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
    new EnvironmentPlugin(process.env),
    new DotenvPlugin({ path: `./.env.${env}`, expand: true }),
    // delete previous build files
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [distPath],
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, "app.html"),
      inject: "body",
      chunks: ["app"],
      filename: "index.html",
      mode: env,
    }),
    // Write css files to the build folder
    // new MiniCssExtractPlugin({ filename: "css/[name].css" }),
    // copy static assets
    new CopyWebpackPlugin([{ from: "assets", to: "assets" }]),
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
    ],
  },
}
