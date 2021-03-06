import lengthOfLongestSubstring from 'lengthOfLongestSubstring/lengthOfLongestSubstring';

test(`
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
`, () => {
  const result = lengthOfLongestSubstring('abcabcbb');
  const expected = 3;
  expect(result).toEqual(expected);
});
test(`
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
`, () => {
  const result = lengthOfLongestSubstring('bbbbb');
  const expected = 1;
  expect(result).toEqual(expected);
});
test(`
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
`, () => {
  const result = lengthOfLongestSubstring('pwwkew');
  const expected = 3;
  expect(result).toEqual(expected);
});
test(`
Input: " "
Output: 1
`, () => {
  const result = lengthOfLongestSubstring(' ');
  const expected = 1;
  expect(result).toEqual(expected);
});
test(`
Input: ""
Output: 0
`, () => {
  const result = lengthOfLongestSubstring('');
  const expected = 0;
  expect(result).toEqual(expected);
});
test(`
Input:"au"
Output:2
`, () => {
  const result = lengthOfLongestSubstring('au');
  const expected = 2;
  expect(result).toEqual(expected);
});
