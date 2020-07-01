const readlineSync = require("readline-sync");
let number1 = readlineSync.question("What is your shoe size?");
let number2 = readlineSync.question("Which year were you born?");
console.log(number1*2);
console.log((number1*2)+5);
console.log(((number1*2)+5)*50);
console.log((((number1*2)+5)*50)-number2);
console.log(((((number1*2)+5)*50)-number2)+1766);

