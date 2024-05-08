"use strict"

function parsePartCode(label){
    let supplier = label.substring(0,label.indexOf(":"));
    let productNumber = label.substring(label.indexOf(":")+1, label.indexOf("-"));
    let size = label.substring(label.indexOf("-")+1);


    return{
    Supplier: supplier,
    ProductNumber: productNumber,
    Size: size,
    }
}

let label = "DOLE:123-L";

let label1= parsePartCode(label);

console.log(`Supplier: ${label1.Supplier}
    Product Number: ${label1.ProductNumber}
    Size: ${label1.Size}

`)