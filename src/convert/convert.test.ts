import convert from "./convert";

test(`
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
`, () => {
  const result = convert("PAYPALISHIRING", 3);
  const expected = "PAHNAPLSIIGYIR";
  expect(result).toEqual(expected);
});
test(`
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
`, () => {
  const result = convert("PAYPALISHIRING", 4);
  const expected = "PINALSIGYAHRPI";
  expect(result).toEqual(expected);
});
test(`
Input: s = "A", numRows = 1
Output: "A"
`, () => {
  const result = convert("A", 1);
  const expected = "A";
  expect(result).toEqual(expected);
});
test(`
Input: s = "AB", numRows = 1
Output: "AB"
`, () => {
  const result = convert("AB", 1);
  const expected = "AB";
  expect(result).toEqual(expected);
});
