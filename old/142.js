/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head) {
    return head;
  }
  var slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast.next) {
      break;
    }
  }
  if (!fast || !fast.next) {
    return null;
  }
  fast = head;
  while(true) {
    fast = fast.next;
    slow = slow.next;
    if(fast == slow) {
      return fast;
    }
  }
};
