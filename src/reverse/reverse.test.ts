import reverse from "./reverse";

test(`
Input: x = 123
Output: 321`, () => {
  const result = reverse(123);
  expect(result).toBe(321);
});

test(`
Input: x = -123
Output: -321
`, () => {
  const result = reverse(-123);
  expect(result).toBe(-321);
});

test(`
Input: x = 120
Output: 21`, () => {
  const result = reverse(120);
  expect(result).toBe(21);
});
test(`
Input
1534236469
Output
0`, () => {
  const result = reverse(1534236469);
  expect(result).toBe(0);
});
