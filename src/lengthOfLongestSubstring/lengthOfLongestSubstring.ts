function lengthOfLongestSubstring(s: string): number {
  const memo: Record<string, number> = {};
  let res = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const key = s[right];

    if (memo[key] !== undefined) {
      left = Math.max(memo[key], left);
    }

    memo[key] = right + 1;
    res = Math.max(res, right - left + 1);
  }

  return res;
}

export default lengthOfLongestSubstring;
