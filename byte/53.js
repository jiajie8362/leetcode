/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (!nums) {
    return 0;
  }
  var dp = nums.slice();
  var max = dp[0];
  for (var i = 1; i < nums.length; i++) {
    d[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    max = Math.max(dp[i], max);
  }
  return max;
};
