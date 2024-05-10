let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Butter Finger", price: 1.79},
    {product: "Hershey Bar", price: 2.89},
    {product: "Twix", price: 2.89},
    {product: "Fruit Discs", price: 3.79},
    {product: "Juicy Drop Pop", price: 1.25},
    {product: "Laffy Taffy", price: 3.79},
]

let numOfCandy = products.length

for(let i = 0; i<numOfCandy; i++ ){

    if(products[i].price < 4){
        console.log(`${products[i].product} cost ${products[i].price} and that is less than 4`);
    }

    if(products[i].product.indexOf("M&M") !== -1){
        console.log(`${products[i].product} cost ${products[i].price} and has m&M in it's name`);
    }
    if(products[i].product.indexOf("Swedish Fish") !== -1){
        console.log(`yes we carry swedish fish`)
    }
}