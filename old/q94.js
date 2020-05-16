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


var inorderTraversal = function (root) {
  var res = [];
  if(!root) {
    return res;
  }
  var q = [];
  var cur = root;
  while(cur || q.length>0) {
    while(cur) {
      q.push(cur);
      cur = cur.left;
    }
    cur = q.pop();
    res.push(cur.val);
    cur = cur.right;
  }
  return res;
};
