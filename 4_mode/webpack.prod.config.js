const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const DotenvPlugin = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new CssMinimizerPlugin(),
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    // new DotenvPlugin(),
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        //Expressões regulares para identificar como termina o arquivo.
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        //Expressão regulares para identificar o final do arquivo html.
        test: /\.txt$/,
        use: "raw-loader",
      },
    ],
  },
};
