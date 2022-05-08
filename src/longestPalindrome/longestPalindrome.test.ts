import longestPalindrome from "longestPalindrome/longestPalindrome";

const isPalindromic = (s: string) => {
  return s === s.split("").reverse().join("");
};

test(`
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
`, () => {
  const result = longestPalindrome("babad");

  expect(isPalindromic(result)).toBeTruthy();
  expect(result.length).toBe(3);
});
test(`
Input: s = "cbbd"
Output: "bb"
`, () => {
  const result = longestPalindrome("cbbd");
  expect(isPalindromic(result)).toBeTruthy();
  expect(result.length).toBe(2);
});
test(`
Input:"ccd"
Output:"cc"
`, () => {
  const result = longestPalindrome("ccd");
  expect(isPalindromic(result)).toBeTruthy();
  expect(result.length).toBe(2);
});
test(`
Input:"eabcb"
Output:"bcb"
`, () => {
  const result = longestPalindrome("eabcb");
  expect(isPalindromic(result)).toBeTruthy();
  expect(result.length).toBe(3);
});
test(`
Input:"a"
Output:"a"
`, () => {
  const result = longestPalindrome("a");
  expect(isPalindromic(result)).toBeTruthy();
  expect(result.length).toBe(1);
});
test(`
Input
"tattarrattat"
Output
"tattarrattat"
`, () => {
  const result = longestPalindrome("tattarrattat");
  expect(isPalindromic(result)).toBeTruthy();
  expect(result.length).toBe("tattarrattat".length);
});
