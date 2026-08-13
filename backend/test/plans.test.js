"use strict";
const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/app");

describe("GET /api/plans", () => {
  it("lists subscription plans", async () => {
    const res = await request(app).get("/api/plans");
    expect(res.status).to.equal(200);
    expect(res.body.plans).to.have.lengthOf(2);
  });
});

describe("GET /api/plans/:id", () => {
  it("returns a single plan", async () => {
    const res = await request(app).get("/api/plans/2");
    expect(res.body.name).to.equal("Annual");
    expect(res.body.discountPercent).to.equal(20);
  });

  it("404s for an unknown plan", async () => {
    const res = await request(app).get("/api/plans/999");
    expect(res.status).to.equal(404);
  });
});
