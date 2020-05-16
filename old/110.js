/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  function helper(root) {
    if (!root) {
      return 0;
    }
    var l = helper(root.left);
    var r = helper(root.right);
    return Math.max(l, r)+1;
  }
  if(!root) {
    return true;
  }
  var l = helper(root.left);
  var r = helper(root.right);
  return Math.abs(l - r) <=1 && isBalanced(root.left) && isBalanced(root.right);
};
