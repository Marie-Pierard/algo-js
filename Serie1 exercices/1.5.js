const readlineSync = require("readline-sync");
let number1 = readlineSync.question("Type in a decimal number");
let number2 = readlineSync.question("Type another one");
console.log(Math.trunc(number1)*number2);
