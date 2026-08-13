import { formatDiscount } from './plans';

describe('formatDiscount', () => {
  it('reports no discount for 0%', () => {
    expect(formatDiscount(0)).toBe('No discount');
  });
  it('formats a percent discount', () => {
    expect(formatDiscount(20)).toBe('20% off');
  });
});
