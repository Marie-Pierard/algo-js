const readlineSync = require("readline-sync");
function rand10() {
    return (Math.round(Math.random()*10));
}

/*définition d'un array et d'un nombre n*/
let arr = [];
let n = new Number(readlineSync.question("How many numbers do you want in the array"));
function multiRand(n) {
    for (let i = 0; i < n; i++) /*i=0, tant que i est  plus petit ou égal à n, la boucle tourne en ajoutant chaque fois 1*/
    {
        arr.push(rand10());
    }
    return arr;
}

/* function average */
function average(arr) {
let sum = 0;

for (let elem of arr) {
    sum+=elem;
}
return(sum/arr.length);
}
/*function minimum */
function min(arr) {
    let x=Math.min(...arr);
    return x;
}

/*function maximum */
function max(arr) {
    let x=Math.max(...arr);
    return x;
}
/*console.log*/
console.log("Your array is "+multiRand(n));
console.log("The average of the array is "+average(arr));
console.log("The minimum number in the array is "+min(arr));
console.log("The maximum number in the array is "+max(arr));