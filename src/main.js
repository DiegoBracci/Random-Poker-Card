/* eslint-disable */
import "bootstrap";
import "./style.css";

// Generador de palo aleatorio
window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    let result = generateSimbol();
    document.querySelector("#simbol1").innerHTML = result;
    document.querySelector("#simbol2").innerHTML = result;
    document.querySelector("#number").innerHTML = generateNumber();
  });
};

function generateSimbol() {
  let palo = ["&clubs;", "&spades;", "&hearts;", "&diams;"];
  let paloIndx = Math.floor(Math.random() * palo.length);
  return palo[paloIndx];
}
// //Generador de numeros aleatorios
function generateNumber() {
  let number = Math.floor(Math.random() * 13);
  return number;
}
