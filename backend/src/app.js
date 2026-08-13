"use strict";
const express = require("express");
const customerRouter = require("./routes/customer");
const adminRouter = require("./routes/admin");
const plansRouter = require("./routes/plans");

const app = express();
app.use(express.json());

app.use("/api/customer", customerRouter);
app.use("/api/admin", adminRouter);
app.use("/api/plans", plansRouter);
app.get("/health", (req, res) => res.json({ status: "ok" }));

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`saasplatform-backend listening on ${port}`));
}
module.exports = app;
