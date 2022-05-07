import twoSum from './twoSum';

test('[2, 7, 11, 15], 9 => [0, 1]', () => {
  const result = twoSum([2, 7, 11, 15], 9);
  const expected = [0, 1];
  expect(result.sort()).toEqual(expected.sort());
});

test('[3, 2, 4], 6 => [1, 2]', () => {
  const result = twoSum([3, 2, 4], 6);
  const expected = [1, 2];
  expect(result.sort()).toEqual(expected.sort());
});

test('[3, 3], 6 => [0, 1]', () => {
  const result = twoSum([3, 3], 6);
  const expected = [0, 1];
  expect(result.sort()).toEqual(expected.sort());
});
