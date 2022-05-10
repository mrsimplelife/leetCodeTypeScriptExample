function myAtoi(s: string): number {
  const getResult = (s: string, shouldMinus: boolean) => {
    const res = Number(s);
    if (shouldMinus) {
      if (-res < -(2 ** 31)) return -(2 ** 31);
      return -res;
    }
    if (res > 2 ** 31 - 1) return 2 ** 31 - 1;
    return res;
  };
  let shouldMinus = false;
  let start = false;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if ("0" <= s[i] && s[i] <= "9") {
      res += s[i];
      start = true;
    } else if (!start && s[i] === "+") {
      start = true;
    } else if (!start && s[i] === "-") {
      shouldMinus = true;
      start = true;
    } else if (!start && s[i] === " ") {
    } else {
      return getResult(res, shouldMinus);
    }
  }
  return getResult(res, shouldMinus);
}

export default myAtoi;
