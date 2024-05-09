"use strict"

let i = 1
while(i <= 7){

    console.log("I love loops");

    i++;
}

let cars = ["ford", "mazda", "infinity", "acura", "chevy", "mercedes"]

for(let i = 0; i < cars.length; i++){
    if (cars[i] !== "acura"){continue;

}
console.log(`this ${cars[i]} is a POS `);

}

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}


console.log(cars.length)

console.log(cars[cars.length - 1]);


let listOfNumber =[1,2,3,4];
let listOfStrings =[eric,bob];

let employees = [
    {
        employeeID: 1,
        name :"eric",
        payRate: 50
    },
    {
        employeeID: 2,
        name :"bob",
        payRate: 30
    },
]

for(let i=0; i <employees.length; i++){
    console.log(`
    employeeID ${employees[i].employeeID}
    payRate ${employees[i].payRate}
    `)
}
