function lengthOfLongestSubstring(s: string): number {
  let start = 0;

  const memo: Record<string, number> = {};

  return s.split("").reduce((prev, curr, index) => {
    if (memo[curr] !== undefined) {
      start = Math.max(memo[curr], start);
    }

    memo[curr] = index + 1;
    return Math.max(prev, index - start + 1);
  }, 0);
}

export default lengthOfLongestSubstring;
// abcabcbb;
// 12345678;

// left: 0;
// index: 1;
// memo: {
//   a: 1;
//   b: 2;
// }
// prev: 1;
