import img from "../img/testeimg.png";
class Image {
  insertImage() {
    const imagem = document.createElement("img");
    imagem.src = img;
    imagem.width = 200;

    document.querySelector("body").appendChild(imagem);
  }
}

export default Image;
