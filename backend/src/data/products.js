"use strict";
const products = [
  { id: 1, name: "Starter Plan", internalCost: 2.5, margin: 0.7 },
  { id: 2, name: "Pro Plan", internalCost: 8.0, margin: 0.6 },
];

function toCustomerView(p) {
  const { id, name } = p;
  return { id, name };
}

function listProducts() {
  return products;
}

module.exports = { listProducts, toCustomerView };
