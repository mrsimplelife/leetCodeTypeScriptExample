function twoSum(nums: number[], target: number): number[] {
  const memo: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    if (memo[target - key] !== undefined) {
      return [i, memo[target - key]];
    }
    memo[key] = i;
  }
  return [0, 1];
}
export default twoSum;
