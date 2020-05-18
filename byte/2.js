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
var addTwoNumbers = function (l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  var newHead = new ListNode(-1);
  var cur = newHead;
  var carry = 0;
  while (l1 || l2) {
    var newNode = new ListNode(carry);
    carry = 0;
    if (l1) {
      newNode.val += l1.val;
    }
    if (l2) {
      newNode.val += l2.val;
    }
    if (newNode.val >= 10) {
      carry = 1;
      newNode.val = newNode.val - 10;
    }
    cur.next = newNode;
    cur = cur.next;
  }
  if(carry === 1) {
    cur.next = new Node(1);
  }
  return newHead.next;
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}
