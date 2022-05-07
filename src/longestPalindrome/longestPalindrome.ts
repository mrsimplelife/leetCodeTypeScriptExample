function longestPalindrome(s: string): string {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    let curr = '';
    for (let j = i; j < s.length; j++) {
      curr += s[j];
      if (s[i] === s[j] && res.length < curr.length && isPalindromic(curr)) {
        res = curr;
      }
    }
  }
  return res;
}

export const isPalindromic = (s: string) => {
  return s === s.split('').reverse().join('');
};

export default longestPalindrome;

// c b b d
