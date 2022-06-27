// function isMatch(s: string, p: string): boolean {
//   return s.match(new RegExp(p))?.[0] === s;
// }

function isMatch(s: string, p: string): boolean {
  const dp = new Array(s.length + 1)
    .fill(null)
    .map(() => new Array(p.length + 1).fill(false));
  dp[s.length][p.length] = true;
  // console.log(s, p);
  // console.table(dp);
  for (let i = s.length; i >= 0; i--) {
    const set = new Set([s[i], '.']);
    // console.log(set, '-'.repeat(50));
    for (let j = p.length - 1; j >= 0; j--) {
      // console.log(p[j], j);
      const firstMatch = i < s.length && set.has(p[j]);
      // console.log(firstMatch);
      const isAll = p[j + 1] === '*';
      // console.log(isAll);
      if (isAll) {
        dp[i][j] = dp[i][j + 2] || (firstMatch && dp[i + 1][j]);
      } else {
        dp[i][j] = firstMatch && dp[i + 1][j + 1];
      }
      // console.table(dp);
    }
  }
  return dp[0][0];
}
export default isMatch;
