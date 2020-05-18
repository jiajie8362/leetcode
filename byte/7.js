/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var r = 0;
  var negative = x < 0;
  x = Math.abs(x);
  while (x) {
    if (r > Math.pow(2, 31) / 10) {
      return 0;
    }
    r = r * 10 + x % 10;
    x = Math.floor(x / 10)
  }
  return negative ? -r : r;
};
