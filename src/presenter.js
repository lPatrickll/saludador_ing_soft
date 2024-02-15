// import sumar from "./sumador";
// import multiplicar from "./multiplicar";
import saludar from "./saludar";

const nombre_input = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");


let nombre = nombre_input.value;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p> Hola " + saludar(nombre) + "</p>";
});