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
    {product: "Laffy Taffy", price: 1.00},
]
function compareFnForObjectProduct(a, b) {
    if (a.product < b.product) {
      return -1;
    } else if (b.product > a.product) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }


  function compareFnPrice(a, b) {
    if (b.price < a.price) {
      return -1;
    } else if (a.price > b.price) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  products.sort(compareFnForObjectProduct);

  console.log(products);

  console.log("--------price sort--------");

  products.sort(compareFnPrice)

  console.log(products);
