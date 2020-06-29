const readlineSync = require("readline-sync");
let favoriteNumber = readlineSync.question("What is your favorite number?");
while (favoriteNumber!==42){
  let favoriteNumber = readlineSync.question("Are you sure? What is your favorite number?");
  
if (favoriteNumber==42) {
  console.log("well done");
}  
break;
}

 