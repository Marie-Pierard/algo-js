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

console.log(multiRand(n));
    