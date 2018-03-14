// const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["react-hot-loader/patch", "./client/index.tsx"],

  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/" // Needed for react-hot-reload
  },

  mode: "development",

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          // {
          //   // Babel is not not needed for typescript
          //   // but react-hot-loader will not work without it
          //   loader: "babel-loader",
          //   options: {
          //     babelrc: false,
          //     plugins: ["react-hot-loader/babel"]
          //   }
          // },
          "react-hot-loader/webpack",
          "ts-loader"
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },

  devServer: {
    // respond to 404s with index.html
    historyApiFallback: true,
    open: true,
    port: 3000
    // proxy: {
    //   "/api": 'http://localhost/8080'
    // }
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },

  plugins: [
    new CleanWebpackPlugin(["dist"]),

    new HtmlWebpackPlugin({
      template: "client/index.html"
    })
  ]
};
