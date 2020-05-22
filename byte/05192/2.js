/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  var count = (left, right) => {
    if (right - left + 1 < k) {
      return 0;
    }
    var times = new Map();
    for (var i = left; i <= right; i++) {
      if (times.has(str[i])) {
        times.set(str[i], times.get(str[i])+1);
      } else {
        times.set(str[i], 1);
      }
    }
    while (right - left + 1 >= k && times.get(str[left]) < k) {
      left++;
    }

    while (right - left + 1 >= k && times.get(str[right]) < k) {
      right--;
    }
    if (right - left + 1 < k) {
      return 0;
    }
    for (var i = left; i <= right; i++) {
      if (times.get(str[i]) < k) {
        return Math.max(count(left, i - 1), count(i + 1, right));
      }
    }
    return right -left+1;
  }
  var str = s.split('');
  return count(0,s.length-1);
};
