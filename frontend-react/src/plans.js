export function formatDiscount(percent) {
  return percent === 0 ? "No discount" : `${percent}% off`;
}

export function sortPlansByDiscount(plans) {
  return [...plans].sort((a, b) => b.discountPercent - a.discountPercent);
}
