/*Calcul de la factorielle de n*/ 
const readlineSync = require("readline-sync");
function factorial(a){
    /*base case*/
    if(a == 0 || a == 1){
        return 1;
    /*recursive case*/
    }else{
        return a * factorial(a-1);
    }
}
let a = new Number(readlineSync.question("Give me a number"));
console.log("The factorial of "+ a + " is " + factorial(a));