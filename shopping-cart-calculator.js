"use strict";

const products = [
  { name: "Dell Inspiron", price: 500, quantity: 5 },
  { name: "Headphone SONY", price: 200, quantity: 25 },
  { name: "Black Puma T-shirt", price: 25, quantity: 55 },
];

const roundToTwo = (num) => Math.round((num * 100) / 100).toFixed(2);

const calculateCartTotal = function (data) {
  const subTotal = data
    .map((product) => product.price * product.quantity)
    .reduce((acc, value) => acc + value);
  const salesTax = subTotal * 0.08;
  const total = subTotal + salesTax;
  const object = {
    subTotal: subTotal,
    salesTax: salesTax,
    total: total,
  };
  return object;
};

console.log(products);
console.log(calculateCartTotal(products));
