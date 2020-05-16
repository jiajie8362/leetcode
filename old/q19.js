/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var removeNthFromEnd = function (head, n) {
  if (!head || n < 1) {
    return head;
  }
  var dummyHead = new ListNode(-1);
  dummyHead.next = head;
  var slow = fast = dummyHead;
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  while(fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummyHead.next;
};
