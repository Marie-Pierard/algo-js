/*Creation of a function named rand10() that returns a random integer between 1 and 10. Creation of a program that displays the result of that function each time it is run.*/
function rand10() {
    return (Math.round(Math.random()*10));
}
console.log(rand10());