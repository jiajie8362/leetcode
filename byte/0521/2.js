/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let res = new Set();
  let flag = new Set();
  let tem = [];

  let backtrack = (nums, flag, tem) => {
    if (tem.length == nums.length) {
      return res.add(tem.join(""));
    }
    for (let i = 0; i < nums.length; i++) {
      if (!flag.has(i)) {
        flag.add(i);
        backtrack(nums, flag, [...tem, nums[i]]);
        flag.delete(i);
      }
    }
  }
  let ret = [];
  for(let v of res) {
    ret.push(v.split(" "));
  }
  return ret;
};
