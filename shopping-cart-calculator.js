"use strict";

const products = [
  { name: "Dell Inspiron", price: 557.39, quantity: 5 },
  { name: "Headphone SONY", price: 289.99, quantity: 25 },
  { name: "Black Puma T-shirt", price: 27.39, quantity: 55 },
];

const roundToTwo = (num) => Number(num.toFixed(2));

const calculateCartTotal = function (data) {
  if (!Array.isArray(data) || data.length === 0) {
    return { error: "The array is empty." };
  }
  /*
  Validations:
  if name is null or undefined.
  if is not a number
  if is less than 0
  */

  let subTotal = 0;

  for (const product of data) {
    if (typeof product.name !== "string" || !product.name.trim()) {
      return { error: "invalid product name." };
    }

    if (
      typeof product.price !== "number" ||
      typeof product.quantity !== "number"
    ) {
      return { error: "Invalid product data." };
    }

    if (product.price < 0 || product.quantity < 0) {
      return { error: "Price and quantity must be non-negative numbers." };
    }

    const effectivePrice =
      product.price > 30 ? product.price * 0.95 : product.price;

    console.log(
      `Product: ${product.name}, Price: $${roundToTwo(
        effectivePrice
      )}, Quantity: ${product.quantity}`
    );

    subTotal += effectivePrice * product.quantity;
  }

  // const subTotal = data.reduce((acc, product) => {
  //   const effectivePrice =
  //     product.price > 30 ? product.price * 0.95 : product.price;
  //   return acc + effectivePrice * product.quantity;
  // });

  const salesTax = subTotal * 0.08;
  let total = subTotal + salesTax;
  let shippingCost = total < 50 ? 5 : 0;
  total += shippingCost;

  return {
    subTotal: roundToTwo(subTotal),
    salesTax: roundToTwo(salesTax),
    total: roundToTwo(total),
    shippingCost: shippingCost,
  };
};

console.log(calculateCartTotal(products));
