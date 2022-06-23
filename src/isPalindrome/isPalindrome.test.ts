import isPalindrome from 'isPalindrome/isPalindrome';

test(`
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
`, () => {
  const result = isPalindrome(121);
  const expected = true;
  expect(result).toEqual(expected);
});

test(`
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
`, () => {
  const result = isPalindrome(-121);
  const expected = false;
  expect(result).toEqual(expected);
});

test(`
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
`, () => {
  const result = isPalindrome(10);
  const expected = false;
  expect(result).toEqual(expected);
});
