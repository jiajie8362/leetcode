/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};

var copyRandomList = function (head) {
  if (!head)
    return head;
  var ptr = head;
  while (ptr) {
    newNode = new Node(ptr.val, null, null)
    newNode.next = ptr.next
    ptr.next = newNode
    ptr = newNode.next
  }
  ptr = head
  while (ptr) {
    if (ptr.random) {
      ptr.next.random = ptr.random.next
    }
    ptr = ptr.next.next
  }

  ptr_old = head
  ptr_new = head.next
  newHead = head.next
  while (head) {
    ptr_old.next = ptr_old.next.next
    ptr_new.next = ptr_new.next.next
    ptr_old = ptr_old.next
    ptr_new = ptr_new.next
  }
  return newHead
};
