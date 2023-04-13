import Title from "./components/title";
import Image from "./components/image";
import Button from "./components/button";
import warning from "./templates/warning.html";
import styles from "./styles/warning.css";
import fraseTxt from "./files/frase.txt";
import descricao from "./files/descricao.json";

const title = new Title();
title.create("Primeira página");

const image = new Image();
image.insertImage();

const button = new Button();
button.create();

//babel spread
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

let { a, b, ...teste } = obj;

console.log(a, b, teste);

const body = document.querySelector("body");
body.innerHTML += warning;

// txt loader
const frase = fraseTxt;
console.log(frase);

// json
const pessoa = descricao;
console.log(pessoa);
pessoa.habilidades.forEach((habilidade) => console.log(habilidade));
