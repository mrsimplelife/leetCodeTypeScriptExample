import convert from "./convert";

test(`
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
`, () => {
  const result = convert("PAYPALISHIRING", 3);
  const expected = "PAHNAPLSIIGYIR";
  expect(result).toEqual(expected);
});
