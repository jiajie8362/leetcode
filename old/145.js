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
var postorderTraversal = function (root) {
  var res = [];
  if (!root) {
    return res;
  }
  var q = [root];
  while (q.length > 0) {
    var cur = q.pop();
    res.push(cur.val);
    if(cur.left){
      q.push(cur.left)
    }
    if(cur.right) {
      q.push(cur.right)
    }
  }
  res.reverse();
  return res;
};
