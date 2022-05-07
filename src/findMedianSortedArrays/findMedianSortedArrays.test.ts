import findMedianSortedArrays from 'findMedianSortedArrays/findMedianSortedArrays';

test(`
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
`, () => {
  const result = findMedianSortedArrays([1, 3], [2]);
  const expected = 2.0;
  expect(result).toEqual(expected);
});

test(`
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
`, () => {
  const result = findMedianSortedArrays([1, 2], [3, 4]);
  const expected = 2.5;
  expect(result).toEqual(expected);
});
