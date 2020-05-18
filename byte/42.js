/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (!height) {
    return 0;
  }
  var n = height.length;
  var ans = 0;
  var l = 0, r = n - 1;
  var l_max = height[0];
  var r_max = height[n - 1];
  while (l <= r) {
    l_max = Math.max(l_max,height[l]);
    r_max = Math.max(r_max,height[r]);
    if(l_max<r_max) {
      ans +=l_max-height[l];
      l++;
    } else {
      ans += r_max -height[r];
      r--;
    }
  }
  return ans;
};
