"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scoresArray){
    let total=0;
    for(let i = 0; i < scoresArray.length; i++){
        total += scoresArray[i];
    }
    return total / scoresArray.length 
}

let average = getAverage((myScores))
console.log(getAverage(myScores).toFixed(2));
console.log(getAverage(yourScores).toFixed(2));