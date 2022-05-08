function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const head = new ListNode();
  let curr = head;

  let ten = 0;
  while (l1 || l2) {
    let val = (l1?.val || 0) + (l2?.val || 0) + ten;
    ten = 0;
    if (val >= 10) {
      ten = 1;
      val -= 10;
    }
    curr.val = val;

    l1 = l1?.next || null;
    l2 = l2?.next || null;
    if (l1 || l2) {
      curr.next = new ListNode();
      curr = curr.next;
    }
  }
  if (ten) {
    curr.next = new ListNode(ten);
  }
  return head;
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default addTwoNumbers;
