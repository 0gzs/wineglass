const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.join(__dirname, './client/src/')
const DIST = path.join(__dirname, './client/dist')
const mode = "development"

module.exports = {
  entry: [
    `${SRC_DIR}/index.jsx`
  ],
  output: {
    path: path.join(__dirname, DIST),
    filename: 'bundle.js'
  },
  devtool: mode === "development" ? "eval-source-map" : "source-map",
  mode: mode,
  watch: mode === "development" ? true : false,
  watchOptions: {
    aggregateTimeout: 500,
    poll: 500,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: "asset/resource",
      }, 
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${SRC_DIR}/index.html`,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    })
  ] 
}
