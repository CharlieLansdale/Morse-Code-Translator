"use strict";

// Input box
// Button => translate
// Click button => translates text to output box (maybe this is better) || changes the input text
// have object with letters/numbers and morse code equivalents 
// how to change the text
// event listener on click of button
// pull typed text into js eg. "Hello"
// Split string into an array of letters ["H", "e", "l", "l", "o"]
// use map to create array of morse letters ["..--", "--..".....]
// turn array back into string "..----..--.--....--...."
// place string back into HTML from JS
var alphabetToMorse = {
  letterA: ".-",
  letterB: "-...",
  letterC: "-.-.",
  letterD: "-..",
  letterE: ".",
  letterF: "..-.",
  letterG: "--.",
  letterH: "....",
  letterI: "..",
  letterJ: ".---",
  letterK: "-.-",
  letterL: ".-..",
  letterM: "--",
  letterN: "-.",
  letterO: "---",
  letterP: ".--.",
  letterQ: "--.-",
  letterR: ".-.",
  letterS: "...",
  letterT: "-",
  letterU: "..-",
  letterV: "...-",
  letterW: ".--",
  letterX: "-..-",
  letterY: "-.--",
  letterZ: "--.."
};
var numnbersToMorse = {
  number1: ".----",
  number2: "..---",
  number3: "...--",
  number4: "....-",
  number5: ".....",
  number6: "-....",
  number7: "--...",
  number8: "---..",
  number9: "----.",
  number0: "-----"
}; // const translateButton = document.querySelector("#translate-button");
// translateButton.addEventListener("click", () => {
// })
// const convertToMorse = (str) => {
//   return str.toUpperCase().split("").map(el => {
//   return alphabetToMorse[el] ? alphabetToMorse[el] : el;
//   }).join("");
// };
// console.log(convertToMorse("Charlie"));