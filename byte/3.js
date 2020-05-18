/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var res = 0;
  if (!s) {
    return res;
  }
  var i = j = 0;
  var m = {};
  while (j < s.length) {
    var c1 = s[j];
    if (m[c1]) {
      m[c1]++;
    } else {
      m[c1] = 1;
    }
    j++;
    while (m[c1] > 1) {
      var c2 = s[i];
      i++;
      m[c2]--;
    }
    res = Math.max(res, j-i);
  }
  return res;
};

lengthOfLongestSubstring("abcabcbb");
