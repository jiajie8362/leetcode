/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  if (m <= 0 || n <= 0) {
    return 0;
  }
  var cur = new Array(m).fill(1);
  for (var i = 1; i < n; i++) {
    for (var j = 1; j < m; j++) {
      cur[j] = cur[j]+cur[j-1];
    }
  }
  return cur[m-1];
};

console.log(uniquePaths(3, 2))
