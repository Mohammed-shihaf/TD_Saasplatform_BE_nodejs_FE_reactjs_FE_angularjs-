"use strict";
const express = require("express");
const { listProducts, toCustomerView } = require("../data/products");
const router = express.Router();

router.get("/products", (req, res) => {
  res.json({ products: listProducts().map(toCustomerView) });
});

module.exports = router;
