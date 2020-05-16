/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  var carry = 0;
  var newHead = new ListNode(-1);
  var cur = newHead;
  while (l1 || l2) {
    var newNode = new ListNode(carry);
    if (l1) {
      newNode.val += l1.val;
      l1=l1.next;
    }
    if (l2) {
      newNode.val += l2.val;
      l2=l2.next;
    }
    carry = parseInt(newNode.val / 10, 10);
    newNode.val = newNode.val % 10;
    cur.next = newNode;
    cur = cur.next;
  }
  if (carry) {
    cur.next = new ListNode(1);
  }
  return newHead.next;
};
var l1 = new ListNode(2)
l1.next=new ListNode(4)
l1.next.next = new ListNode(3)
var l2 = new ListNode(5)
l2.next=new ListNode(6)
l2.next.next = new ListNode(4)
addTwoNumbers(l1,l2)
