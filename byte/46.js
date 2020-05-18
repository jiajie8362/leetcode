/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var helper = function (nums, track, res) {
  if (track.length === nums.length) {
    res.push(nums);
    return;
  }
  for (var i = 0; i < nums.length; i++) {
    if (track.indexOf(nums[i]) !== -1) {
      continue;
    }
    track.push(nums[i]);
    helper(nums, track, res);
    track.pop(nums[i]);
  }
}
var permute = function (nums) {
  var res = [];
  if (!nums) {
    return res;
  }
  helper(nums, [], res);
};
