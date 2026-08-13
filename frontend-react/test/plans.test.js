import { expect } from "chai";
import { formatDiscount, sortPlansByDiscount } from "../src/plans.js";

describe("formatDiscount", () => {
  it("reports no discount for 0%", () => {
    expect(formatDiscount(0)).to.equal("No discount");
  });
  it("formats a percent discount", () => {
    expect(formatDiscount(20)).to.equal("20% off");
  });
});

describe("sortPlansByDiscount", () => {
  it("sorts highest discount first without mutating input", () => {
    const input = [{ id: 1, discountPercent: 0 }, { id: 2, discountPercent: 20 }];
    const sorted = sortPlansByDiscount(input);
    expect(sorted.map((p) => p.id)).to.deep.equal([2, 1]);
    expect(input[0].id).to.equal(1);
  });
});
