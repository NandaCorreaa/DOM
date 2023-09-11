//Meu primeiro contato com DOM
let titulo = document.getElementById("titulo");
console.log(titulo);
titulo.style.color = "darkmagenta";

const texto = document.getElementsByTagName("p");
console.log(texto);

texto[0].style.textAlign = "center";

let corpo = document.getElementsByClassName("principal");
console.log(corpo);
// array chamado HTMLCollection

const teste = document.querySelector("p");
console.log(teste);

let numeroInicial = document.querySelector("h3");
console.log(numeroInicial);

let adição = 0;
function somar() {
  adição += 1;
  numeroInicial.innerText = adição;
}
function diminuir() {
  adição -= 1;
  numeroInicial.innerText = adição;
}
function reset() {
  adição = 0;
  numeroInicial.innerText = adição;
}
