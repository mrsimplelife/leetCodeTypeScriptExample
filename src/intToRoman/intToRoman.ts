function intToRoman(num: number): string {
  let res = '';
  function toRoman(_unit: keyof typeof unit) {
    if (num >= unit[_unit]) {
      res += _unit.repeat(num / unit[_unit]);
      num = num % unit[_unit];
    }
  }

  Object.keys(unit).forEach((key) => {
    toRoman(key as keyof typeof unit);
  });
  return res;
}
export default intToRoman;

const unit = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
