/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (!nums || nums.length < 3) {
      return [];
    }
    nums.sort(function (l, r) {
      return l - r;
    });
    var res = [];
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        return res;
      }
      if (i > 0 && nums[i] == nums[i - 1]) {
        continue;
      }
      var j = i + 1, k = nums.length - 1;
      while (j < k) {
        var ni = nums[i], nj = nums[j], nk = nums[k];
        var sum = ni + nj + nk;
        if (sum < 0) {
          j++;
        } else if (sum > 0) {
          k--;
        } else if (sum === 0) {
          res.push([ni, nj, nk]);
          j += 1;
          k += 1;
          while (j < k && nums[j] == nums[j - 1]) {
            j++;
          }
          while (j < k && nums[k] == nums[k + 1]) {
            k--;
          }
        }
      }
    }
    return res;
  }
;


console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))
