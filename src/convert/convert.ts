function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const arr: Array<Array<string>> = Array(numRows)
    .fill([])
    .map(() => []);
  let arrIndex = 0;
  let shouldMinus = true;
  for (let i = 0; i < s.length; i++) {
    arr[arrIndex].push(s[i]);
    if (i % (numRows - 1) === 0) {
      shouldMinus = !shouldMinus;
    }
    if (shouldMinus) {
      arrIndex--;
    } else {
      arrIndex++;
    }
  }

  return arr
    .reduce((previous, current) => {
      return previous.concat(current);
    }, [])
    .join("");
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
