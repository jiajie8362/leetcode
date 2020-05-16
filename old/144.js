/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  var res = [];
  var q = [root];
  while (q.length > 0) {
    var cur = q.pop();
    res.push(cur.val)
    if(cur.left) {
      q.push(cur.left)
    }
    if(cur.right) {
      q.push(cur.right)
    }
  }
  return res;
};
