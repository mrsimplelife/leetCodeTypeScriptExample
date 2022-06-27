import maxArea from 'maxArea/maxArea';

test(`
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
`, () => {
  const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
  const expected = 49;
  expect(result).toEqual(expected);
});

test(`
Input: height = [1,1]
Output: 1
`, () => {
  const result = maxArea([1, 1]);
  const expected = 1;
  expect(result).toEqual(expected);
});
