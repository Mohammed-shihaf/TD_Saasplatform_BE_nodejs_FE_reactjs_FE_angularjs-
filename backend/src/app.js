"use strict";
const express = require("express");
const app = express();
app.use(express.json());

// Multi-Product SaaS Platform: one backend, two API namespaces.
// /api/customer/* is public - only the React app calls it.
// /api/admin/* is internal - only the Angular app calls it.
app.get("/api/customer/products", (req, res) => {
  res.json({
    products: [
      { id: 1, name: "Starter Plan" },
      { id: 2, name: "Pro Plan" },
    ],
  });
});

app.get("/api/admin/products", (req, res) => {
  res.json({
    products: [
      { id: 1, name: "Starter Plan", internalCost: 2.5, margin: 0.7 },
      { id: 2, name: "Pro Plan", internalCost: 8.0, margin: 0.6 },
    ],
  });
});

app.get("/health", (req, res) => res.json({ status: "ok" }));

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`saasplatform-backend listening on ${port}`));
}
module.exports = app;
