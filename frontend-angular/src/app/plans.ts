export interface Plan {
  id: number;
  name: string;
  billingCycle: string;
  discountPercent: number;
}

export function formatDiscount(percent: number): string {
  return percent === 0 ? 'No discount' : `${percent}% off`;
}
