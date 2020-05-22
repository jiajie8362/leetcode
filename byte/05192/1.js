/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  var m = obstacleGrid.length;
  var n = obstacleGrid[0].length;
  if (m <= 0 || n <= 0) {
    return 0;
  }
  if (obstacleGrid[0][0] == 1) {
    return 0;
  }
  var dp = new Array(m);
  for (var i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
  }

  for (var i = 1; i < n; i++) {
    if (obstacleGrid[0][i] != 1) {
      dp[0][i] = dp[0][i - 1];
    }
  }

  for (var i = 1; i < m; i++) {
    if (obstacleGrid[0][i] != 1) {
      dp[0][i] = dp[0][i - 1];
    }
  }

  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      if (obstacleGrid[i][j] != 1) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[m - 1][n - 1];
};

console.log(uniquePathsWithObstacles([[0, 0], [1, 1], [0, 0]]))
