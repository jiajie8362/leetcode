/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var res = [];

  function helper(l, r, ls) {
    if (l === 0 && r === 0) {
      res.push(ls.join(''));
    }
    if (l > r || l<0||r<0) {
      return;
    }
    ls.push('(');
    helper(l-1, r, ls);
    ls.pop();
    ls.push(')');
    helper(l, r-1, ls);
    ls.pop();
  }

  helper(n , n, []);
  return res;
};

console.log(generateParenthesis(3))
