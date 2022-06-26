// function isMatch(s: string, p: string): boolean {
//   return false;
// }

function isMatch(s: string, p: string): boolean {
  const dp = new Array(s.length + 1)
    .fill(null)
    .map(() => new Array(p.length + 1).fill(false));
  dp[s.length][p.length] = true;
  for (let i = s.length; i >= 0; i--) {
    for (let j = p.length - 1; j >= 0; j--) {
      const firstMatch = i < s.length && new Set([s[i], '.']).has(p[j]);
      if (j + 1 < p.length && p[j + 1] === '*') {
        dp[i][j] = dp[i][j + 2] || (firstMatch && dp[i + 1][j]);
      } else {
        dp[i][j] = firstMatch && dp[i + 1][j + 1];
      }
    }
  }
  return dp[0][0];
}

export default isMatch;
