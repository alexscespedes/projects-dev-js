"use strict";

const products = [
  { name: "Dell Inspiron", price: 557.39, quantity: 5 },
  { name: "Headphone SONY", price: 289.99, quantity: 25 },
  { name: "Black Puma T-shirt", price: 27.39, quantity: 55 },
];

const roundToTwo = (num) => Number(Math.round((num * 100) / 100).toFixed(2));

const calculateCartTotal = function (data) {
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
  // console.log(roundToTwo(subTotal));
  // console.log(roundToTwo(salesTax));
  // console.log(roundToTwo(total));
  return object;
};

console.log(products);
console.log(calculateCartTotal(products));
