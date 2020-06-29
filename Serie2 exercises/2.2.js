const readlineSync = require("readline-sync");
let min = new Number(readlineSync.question("Give me a number"));
let max = new Number(readlineSync.question("Give me a bigger number"));

if (min>max){
    console.log("You are an idiot");
  } else {
    console.log("Well done"); 
let current = new Number(readlineSync.question("Give me any number between the two"));
if (current<max){
    console.log("Bravo");
  } else {
    console.log("Try again"); 
  }
}