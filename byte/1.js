/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (!nums) {
    return [];
  }
  var m = {};
  for (var i = 0; i < nums.length; i++) {
    if(!isNaN(m[target-nums[i]])) {
      return [target-nums[i], i];
    }
    m[nums[i]] = i;
  }
  return [];
};
