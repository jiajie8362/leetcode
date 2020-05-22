/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  var n = obstacleGrid.length;
  var m = obstacleGrid[0].length;
  if (m <= 0 || n <= 0) {
    return 0;
  }
  if (obstacleGrid[0][0] == 1) {
    return 0;
  }
  var dp = new Array(m).fill(0);
  dp[0] = 1;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (obstacleGrid[i][j] == 1) {
        dp[j] = 0;
      } else if (j > 0) {
        dp[j] = dp[j - 1] + dp[j];
      }
    }
  }
  return dp[m - 1];
};

console.log(uniquePathsWithObstacles([[0,0]]))
