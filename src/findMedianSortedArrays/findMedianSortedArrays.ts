function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const arr = nums1.concat(nums2);
  arr.sort((a, b) => a - b);
  if (arr.length % 2 === 0) {
    const middle = arr.length / 2 - 1;
    return (arr[middle] + arr[middle + 1]) / 2;
  }
  const middle = Math.floor(arr.length / 2);
  return arr[middle];
}
export default findMedianSortedArrays;
