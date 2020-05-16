/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  var res = [];

  function helper(root, i) {
    if (!root) {
      return;
    }
    if (res.length < i) {
      res.push([])
    }
    res[i].push(root.val);
    helper(root.left, i + 1);
    helper(root.right, i + 1)
  }

  helper(root, 0)
  return res;
};
