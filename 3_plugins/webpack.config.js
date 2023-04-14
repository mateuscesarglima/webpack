const { resolve } = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const DotenvPlugin = require("dotenv-webpack");
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
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new DotenvPlugin(),
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
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
