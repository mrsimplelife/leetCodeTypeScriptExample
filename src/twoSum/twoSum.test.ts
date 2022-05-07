import twoSum from 'twoSum/twoSum';

test(`
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
`, () => {
  const result = twoSum([2, 7, 11, 15], 9);
  const expected = [0, 1];
  expect(result.sort()).toEqual(expected.sort());
});

test(`
Input: nums = [3,2,4], target = 6
Output: [1,2]
`, () => {
  const result = twoSum([3, 2, 4], 6);
  const expected = [1, 2];
  expect(result.sort()).toEqual(expected.sort());
});

test(`
Input: nums = [3,3], target = 6
Output: [0,1]
`, () => {
  const result = twoSum([3, 3], 6);
  const expected = [0, 1];
  expect(result.sort()).toEqual(expected.sort());
});
