/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  var res = [];

  function helper(ls, nums) {
    if(ls.length == nums.length) {
      res.push(ls.slice())
    }
    for(var i=0;i<nums.length;i++) {
      if(ls.indexOf(nums[i]) !=-1) {
        continue;
      }
      ls.push(nums[i]);
      helper(ls, nums);
      res.pop(nums[i]);
    }
  }
  helper([], nums);
  return res;
};
