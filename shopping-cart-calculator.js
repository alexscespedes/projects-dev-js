"use strict";

const products = [
  { name: "Dell Inspiron", price: 500, quantity: 5 },
  { name: "Headphone SONY", price: 200, quantity: 25 },
  { name: "Black Puma T-shirt", price: 25, quantity: 55 },
];

const calculateCartTotal = function (data) {
  const subTotal = data
    .map((product) => product.price * product.quantity)
    .reduce((acc, value) => acc + value);
  return subTotal;
};

console.log(calculateCartTotal(products));
