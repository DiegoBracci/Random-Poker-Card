/* eslint-disable */
import "bootstrap";
import "./style.css";

// Generador de palo aleatorio
window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    let result = generateSimbol();
    //document.querySelector("#simbol1").style.color = "red";
    document.querySelector("#simbol1").innerHTML = result.paloSelect;
    document.querySelector("#simbol1").style.color = result.color;
    document.querySelector("#simbol2").innerHTML = result.paloSelect;
    document.querySelector("#simbol2").style.color = result.color;
    document.querySelector("#number").innerHTML = generateNumber();
  });
};

function generateSimbol() {
  //   let pal1 = ["&clubs;", "&spades;"];
  //   let pal2 = ["&hearts;", "&diams;"];
  let palos = ["&clubs;", "&spades;", "&hearts;", "&diams;"];
  let paloIndx = Math.floor(Math.random() * palos.length);
  let paloColor;
  let palo = palos[paloIndx];
  if (palo === "&hearts;" || palo === "&diams;") {
    paloColor = "red";
  } else {
    paloColor = "black";
  }
  return { paloSelect: palo, color: paloColor };
}
// //Generador de numeros aleatorios
function generateNumber() {
  let number = Math.floor(Math.random() * 13);
  return number;
}
