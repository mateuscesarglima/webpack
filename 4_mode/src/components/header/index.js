import "./styles.css";
class Header {
  create() {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Webpackss";
    h1.classList.add("header");
    document.querySelector("body").appendChild(h1);
  }
}

export default Header;
