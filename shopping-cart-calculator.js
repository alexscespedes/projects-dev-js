"use strict";

const products = [
  { name: "Dell Inspiron", price: 557.39, quantity: 5 },
  { name: "Headphone SONY", price: 289.99, quantity: 25 },
  { name: "Black Puma T-shirt", price: 27.39, quantity: 55 },
];

const roundToTwo = (num) => Number(Math.round((num * 100) / 100).toFixed(2));

const calculateCartTotal = function (data) {
  if (data.length === 0) {
    return "The array is empty.";
  }
  // if is not a number
  // if is less than 0
  for (const product of data) {
    if (
      typeof product.price !== "number" ||
      typeof product.quantity !== "number"
    ) {
      return "Error: Invalid product data.";
    }

    if (product.price < 0 || product.quantity < 0) {
      return "Error: Price and quantity must be non-negative and positive.";
    }

    console.log(
      `Product Name: ${product.name} Product Price: ${product.price} Product Quantity:${product.quantity}`
    );
  }

  const subTotal = data
    .map((product) => product.price * product.quantity)
    .reduce((acc, value) => acc + value);
  const salesTax = subTotal * 0.08;
  const total = subTotal + salesTax;
  const object = {
    subTotal: roundToTwo(subTotal),
    salesTax: roundToTwo(salesTax),
    total: roundToTwo(total),
  };
  return object;
};

console.log(calculateCartTotal(products));
