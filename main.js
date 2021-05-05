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

const button = document.querySelector("#translate-button");
const input = document.querySelector('#input');
const output = document.querySelector('#output');



const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};


const convertToMorse = (str) => {
  return str.toUpperCase().split("").map(el => {
  return morseCode[el] ? morseCode[el] : el;
  }).join(" / ");
};
console.log(convertToMorse('Morse Code Translator'));
console.log(convertToMorse('Hes done it! The greatest night in the history of Chelsea football club...Eurpoean Champions!'));

button.addEventListener("click", () => {
  const conv = convertToMorse(input.value);
  console.log(conv);
  output.innerHTML = conv;
});