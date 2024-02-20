// import sumar from "./sumador";
// import multiplicar from "./multiplicar";
import saludar from "./saludar";
import obtenerSaludoSegunHora from "./saludoHora";

const nombre_input = document.querySelector("#nombre");
const edad_input = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const genero_input = document.querySelector("#genero");
const idioma_input = document.querySelector("#idioma");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const nombre = nombre_input.value;
  const edad = Number.parseInt(edad_input.value);
  const genero = genero_input.value;
  const idioma = idioma_input.value;

  if (idioma === "espa") {
    div.innerHTML = "<p> Hola " + obtenerSaludoSegunHora(idioma) + saludar(nombre, edad, genero, idioma) + "</p>";
  } else {
    if (idioma === "english") {
      div.innerHTML = "<p> Hi " + obtenerSaludoSegunHora(idioma) + saludar(nombre, edad, genero, idioma) + "</p>";
    }
  }
});