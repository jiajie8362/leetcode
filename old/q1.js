/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  nums.sort(function (a,b) {
    return a-b;
  });
  var i = 0, j = nums.length - 1;
  while (i < j) {
    var sum = nums[i] + nums[j];
    if(sum === target) {
      return [i,j];
    } else if(sum < target) {
      i++;
    } else {
      j--;
    }
  }
};

