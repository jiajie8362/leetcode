/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (!height) {
    return 0;
  }
  var i = 0;
  j = height.length - 1;
  var res = Math.min(height[i], height[j]) * (j - i);

  while (i < j) {
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
    res = Math.max(res, Math.min(height[i], height[j]) * (j - i));
  }
  return res;
};
