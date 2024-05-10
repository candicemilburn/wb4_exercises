let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];
   
function getMealTotal(Foodsum){
    //start variable to keep track i.e. total=0
let total = 0
//set variable for array
let meal = Foodsum.length
// 3 parts in for loop
for(let i = 0; i < meal; i++){
    total += Foodsum[i].price;
}
return total;
}
console.log(getMealTotal(lunch))

let lunchTotal = getMealTotal(lunch); 
let lunchTax = lunchTotal * (8/100);
let lunchTip = lunchTotal * (18/100);
let totalDue = lunchTotal + lunchTax + lunchTip;
console.log("the tax "  + lunchTax.toFixed(2));
console.log("the tip "  + lunchTip.toFixed(2) );
console.log("total order " + totalDue.toFixed(2));