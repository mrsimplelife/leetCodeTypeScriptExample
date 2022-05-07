import longestPalindrome from 'longestPalindrome/longestPalindrome';

test(`
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
`, () => {
  const result = longestPalindrome('babad');
  const expected = 'bab';
  expect(result).toEqual(expected);
});
test(`
Input: s = "cbbd"
Output: "bb"
`, () => {
  const result = longestPalindrome('cbbd');
  const expected = 'bb';
  expect(result).toEqual(expected);
});
