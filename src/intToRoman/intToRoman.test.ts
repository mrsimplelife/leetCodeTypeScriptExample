import intToRoman from 'intToRoman/intToRoman';

test(`
Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
`, () => {
  const result = intToRoman(3);
  const expected = 'III';
  expect(result).toEqual(expected);
});

test(`
Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
`, () => {
  const result = intToRoman(58);
  const expected = 'LVIII';
  expect(result).toEqual(expected);
});

test(`
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
`, () => {
  const result = intToRoman(1994);
  const expected = 'MCMXCIV';
  expect(result).toEqual(expected);
});
