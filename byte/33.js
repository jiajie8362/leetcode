/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums) {
    return -1;
  }
  var i = 0, j = nums.length - 1;
  while (i <= j) {
    var mid = parseInt((i + j) / 2);
    var m = nums[mid];
    if (m === target) {
      return mid;
    }
    if (m >= nums[i]) {
      if (target >= nums[i] && target <= m) {
        j = mid - 1;
      } else {
        i = mid + 1;
      }
    } else {
      if (target >= m && target <= nums[j]) {
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    }
  }
  return -1;
};

search(
  [4, 5, 6, 7, 0, 1, 2], 0)
