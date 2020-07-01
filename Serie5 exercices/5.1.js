const readlineSync = require("readline-sync");
function askTvSerie() {
   
let serieTv = {
    "nameOfSerie": readlineSync.question("What is the name of your favorite TV serie?"),
    "prodYear": readlineSync.question("When was it produced (year)?"),
    "castMembers": [],
};
let castMembers = readlineSync.question("Name an actor. When done, leave empty and press Enter");
while (castMembers !== "") {
    serieTv.castMembers.push(castMembers);
    castMembers = readlineSync.question("Name an actor. When done, leave empty and press Enter");
}
return serieTv;
}

/*voir https://stackoverflow.com/questions/28149462/how-to-print-json-data-in-console-log/28149517*/
console.log(JSON.stringify(askTvSerie()));