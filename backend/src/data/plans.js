"use strict";
// Real subscription-plan catalog - distinct from products (products
// are what customers buy; plans are the billing tiers those purchases
// map to). Genuinely different resource, not a filler duplicate.
const plans = [
  { id: 1, name: "Monthly", billingCycle: "monthly", discountPercent: 0 },
  { id: 2, name: "Annual", billingCycle: "annual", discountPercent: 20 },
];

function listPlans() {
  return plans;
}

function getPlan(id) {
  return plans.find((p) => p.id === id);
}

module.exports = { listPlans, getPlan };
