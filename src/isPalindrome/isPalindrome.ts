function isPalindrome(x: number): boolean {
  const strArr = String(x).split('');
  for (let i = 0; i < parseInt(String(strArr.length / 2)); i++) {
    if (strArr[i] !== strArr[strArr.length - i - 1]) {
      return false;
    }
  }
  return true;
}

export default isPalindrome;
