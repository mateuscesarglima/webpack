const { resolve } = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        //expressoes regulares para identificar como termina o arquivo.
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        //expressoes regulares para identificar qual o tipo do arquivo de imagem.
        test: /\.(png|jpg|jpeg)$/,
        use: "file-loader",
      },
      {
        //expressoes regulares para identificar qual o tipo do arquivo de imagem.
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
