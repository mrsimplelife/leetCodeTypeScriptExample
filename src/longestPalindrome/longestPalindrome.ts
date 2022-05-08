function longestPalindrome(s: string): string {
  let maxString = '';
  const check = (left: number, right: number) => {
    while (s[left] && s[right] && s[left] === s[right]) {
      const start = left;
      const end = right + 1;
      if (maxString.length < end - start) {
        maxString = s.substring(start, end);
      }
      left--;
      right++;
    }
  };
  for (let i = 0; i < s.length; i++) {
    check(i, i);
    check(i, i + 1);
  }
  return maxString;
}

export default longestPalindrome;
