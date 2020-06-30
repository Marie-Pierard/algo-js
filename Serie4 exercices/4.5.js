const readlineSync = require("readline-sync");
function calcDistance(x1, x2, y1, y2) 
/*utilsation du théorème de Pythagore*/
{
let a = x1 - x2;
let b = y1 - y2;
return Math.sqrt((a*a) + (b*b));
			}
    let x1 = new Number(readlineSync.question("Give me the latitude coordinate of A"));
    let x2 = new Number(readlineSync.question("Give me the longitude coordinate of A"));
    let y1 = new Number(readlineSync.question("Give me the latitude coordinate of B"));
    let y2 = new Number(readlineSync.question("Give me the longitude coordinate of B"));

console.log("The distance between A and B is "+ calcDistance(x1, y1, x2, y2));