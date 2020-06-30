/*Creation of a function named calcSurface that takes the length and width of a rectangle and returns its surface. Creation of a program that asks the length and width of a rectangle to the user then displays the surface of that rectangle using the function defined ahead of time*/
function calcsurface(a,b) {
    return a*b;
}
const readlineSync = require("readline-sync");
let a = new Number(readlineSync.question("Give me a number in centimeters that will be the width of a rectangle"));
let b = new Number(readlineSync.question("Give me a bigger number in centimeters that will be the length of the same rectangle"));
{console.log("The surface of your rectangle is "+calcsurface(a,b));
}