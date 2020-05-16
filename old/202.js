/**
 * @param {number} n
 * @return {boolean}
 */
function getSquareSum(n) {
  var res = 0;
  while (n) {
    var temp = n % 10;
    res += temp * temp;
    n = parseInt(n / 10);
  }
  return res;
}

var isHappy = function (n) {
  var slow = fast = n;
  slow = getSquareSum(slow);
  fast = getSquareSum(fast);
  fast = getSquareSum(fast)
  while (slow!=fast) {
    slow = getSquareSum(slow);
    fast = getSquareSum(fast);
    fast = getSquareSum(fast)
  }
  return slow == 1;
};
isHappy(19)
