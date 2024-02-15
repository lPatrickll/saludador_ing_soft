// import sumar from "./sumador";
// import multiplicar from "./multiplicar";
import saludar from "./saludar";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const genero_input = document.querySelector("#genero");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const nombre = nombre_input.value;
  const edad = Number.parseInt(edad_input.value);
  const genero = genero_input.value;

  div.innerHTML = "<p> Hola " + saludar(nombre, edad, genero) + "</p>";
});