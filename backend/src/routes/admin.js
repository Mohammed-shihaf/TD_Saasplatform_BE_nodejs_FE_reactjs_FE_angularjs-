"use strict";
const express = require("express");
const { listProducts } = require("../data/products");
const router = express.Router();

router.get("/products", (req, res) => {
  res.json({ products: listProducts() });
});

module.exports = router;
