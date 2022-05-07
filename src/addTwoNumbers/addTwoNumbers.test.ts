import { isNullishCoalesce } from 'typescript/lib/tsserverlibrary';
import addTwoNumbers, { makeListNodeFrom } from './addTwoNumbers';

describe('addTwoNumbers', () => {
  describe('makeListNodeFrom', () => {
    test('', () => {
      const result = makeListNodeFrom([2, 4, 3]);
      expect(result.val).toBe(2);
      expect(result.next!.val).toBe(4);
      expect(result.next!.next!.val).toBe(3);
      expect(result.next!.next!.next).toBeNull();
    });
  });

  test(`
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
`, () => {
    const result = addTwoNumbers(
      makeListNodeFrom([2, 4, 3]),
      makeListNodeFrom([5, 6, 4])
    );
    const expected = makeListNodeFrom([7, 0, 8]);
    expect(result).toEqual(expected);
  });

  test(`
Input: l1 = [0], l2 = [0]
Output: [0]
`, () => {
    const result = addTwoNumbers(makeListNodeFrom([0]), makeListNodeFrom([0]));
    const expected = makeListNodeFrom([0]);
    expect(result).toEqual(expected);
  });

  test(`
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
`, () => {
    const result = addTwoNumbers(
      makeListNodeFrom([9, 9, 9, 9, 9, 9, 9]),
      makeListNodeFrom([9, 9, 9, 9])
    );
    const expected = makeListNodeFrom([8, 9, 9, 9, 0, 0, 0, 1]);
    expect(result).toEqual(expected);
  });
});
