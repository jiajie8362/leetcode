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
var rotateRight = function (head, k) {
  if (!head || k === 0)  {
    return head;
  }
  var cur = head;
  var len = 1;
  while (cur.next) {
    cur = cur.next;
    len++;
  }
  cur.next = head;
  cur = head;
  k = len - k % len;
  while (k > 0) {
    cur = cur.next;
    k--;
  }
  head = cur.next;
  cur.next = null;
  return head;
}
