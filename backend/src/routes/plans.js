"use strict";
const express = require("express");
const { listPlans, getPlan } = require("../data/plans");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ plans: listPlans() });
});

router.get("/:id", (req, res) => {
  const plan = getPlan(Number(req.params.id));
  if (!plan) return res.status(404).json({ error: "plan not found" });
  res.json(plan);
});

module.exports = router;
