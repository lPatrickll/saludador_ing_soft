import sumar from "./sumador";
import multiplicar from "./multiplicar";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const form_multiplicar = document.querySelector("#multiplicar-form");
const div = document.querySelector("#resultado-div");


let firstNumber = Number.parseInt(first.value);
let secondNumber = Number.parseInt(second.value);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

form_multiplicar.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});