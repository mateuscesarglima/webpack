const path = require("path");

module.exports = {
  // Especificar qual o arquivo de entrada
  mode: "development",
  entry: "./src/teste.js",
  // Saída, onde é espeficado o nome do arquivo de saída e a pasta onde esse arquivo irá estar inserido.
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
