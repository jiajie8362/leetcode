/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverse = function (a, b) {
  var pre = null;
  var cur = a;
  var next = a;
  while (cur != b) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
var reverseKGroup = function (head, k) {
  if (!head) {
    return head;
  }
  var a = b = head;
  for (var i = 0; i < k; i++) {
    if (!b) {
      return head;
    }
    b = b.next;
  }
  var newHead = reverse(a, b);
  a.next = reverseKGroup(b, k);
  return newHead;
};
