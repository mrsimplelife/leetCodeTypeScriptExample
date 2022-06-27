import isMatch from 'isMatch/isMatch';

// test(`
// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// `, () => {
//   const result = isMatch('aa', 'a');
//   const expected = false;
//   expect(result).toEqual(expected);
// });
// test(`
// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// `, () => {
//   const result = isMatch('aa', 'a*');
//   const expected = true;
//   expect(result).toEqual(expected);
// });
// test(`
// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
// `, () => {
//   const result = isMatch('ab', '.*');
//   const expected = true;
//   expect(result).toEqual(expected);
// });
// test(`
// Input: s = "aaaabb", p = "c*a*b*"
// Output: true
// `, () => {
//   const result = isMatch('abb', 'c*a*b*');
//   const expected = true;
//   expect(result).toEqual(expected);
// });
test(`
"mississippi"
"mis*is*p*."
Output: false
`, () => {
  const result = isMatch('mississippi', 'mis*is*p*.');
  const expected = false;
  expect(result).toEqual(expected);
});
