function lengthOfLongestSubstring(s: string): number {
  let maxString = '';
  let currString = '';
  for (let i = 0; i < s.length; i++) {
    currString = s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (currString.includes(s[j])) {
        maxString =
          currString.length > maxString.length ? currString : maxString;
        currString = '';
        break;
      }
      currString += s[j];
    }
    maxString = currString.length > maxString.length ? currString : maxString;
  }
  return maxString.length;
}

export default lengthOfLongestSubstring;
