function reverse(x: number): number {
  const res = (x: number) => {
    const res = Number(x.toString().split("").reverse().join(""));
    if (res < -(2 ** 31) || 2 ** 31 - 1 < res) {
      return 0;
    }
    return res;
  };
  if (x < 0) {
    return -res(Math.abs(x));
  }
  return res(x);
}

export default reverse;
