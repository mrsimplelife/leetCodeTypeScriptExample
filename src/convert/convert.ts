function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  let key = 0;
  let shouldMinus = true;
  const memo = s.split("").reduce((prev, curr, index) => {
    if (!prev[key]) prev[key] = curr;
    else prev[key] += curr;
    if (index % (numRows - 1) === 0) {
      shouldMinus = !shouldMinus;
    }
    if (shouldMinus) {
      key--;
    } else {
      key++;
    }
    return prev;
  }, {} as Record<number, string>);
  return Object.values(memo).reduce((prev, curr) => {
    return prev + curr;
  });
}
export default convert;

//0 P A H N ++    ++    ++
//1 APLSIIG ++ -- ++ -- ++
//2 Y I R   --    --    --

//0 P     I    N
//1 A   L S  I G
//2 Y A   H R
//3 P     I

// 0 P       H
// 1 A     S I
// 2 Y   I   R
// 3 P L     I G
// 4 A       N

// 0 P        R
// 1 A      I I
// 2 Y    H   N
// 3 P  S     G
// 4 A I
// 5 L
