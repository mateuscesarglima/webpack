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
        //expressoes regulares para identificar qual o tipo do arquivo de css.
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        //expressao utilizada para identificar arquivos mjs ou apenas js.
        test: /\.m?js$/,
        //propriedade responsavel por excluir o diretorio que nao vai ser lido para aplicar o loader.
        // Isso acontece que ira ter varias bibliotecas dentro e alguns codigos ja vem padronizados
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          // Necessário para rodar as funcionalidades extras
          options: {
            presets: ["@babel/preset-env"],
            //responsavel por criar varias por meio do spread operator em objetos
            //Conseguimos criar diversas variaveis por meio de um objeto
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
      },
      {
        //expressão regulares para identificar o final do arquivo html.
        test: /\.html$/,
        use: "html-loader",
      },
      {
        //expressão regulares para identificar o final do arquivo html.
        test: /\.txt$/,
        use: "raw-loader",
      },
    ],
  },
};
