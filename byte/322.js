/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  var dp = new Array(amount + 1);
  for(var i=0;i<amount+1;i++) {
    dp[i] = 0;
  }
  dp[0] = 0;
  for (var i = 1; i < amount + 1; i++) {
    for (var coin of coins) {
      if (i - coin < 0) {
        continue;
      }
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }
  return dp[amount] == 0 ? -1: dp[amount];
};
