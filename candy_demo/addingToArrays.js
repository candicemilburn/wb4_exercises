"use strict"

let namesArray = ["candice", "eric", "italy", "rohan", "alec"];

namesArray.push("katy");

console.log(namesArray);

namesArray[namesArray.length] = "will";

console.log(namesArray);

//removes last item
namesArray.pop();
console.time(namesArray);


// removes the first item
namesArray.shift();
console.time(namesArray);