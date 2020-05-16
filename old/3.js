/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var l = r = 0;
  var m = {};
  var res = 0;

  while (r < s.length) {
    var c = s[r];
    m[c] = 1 ? !m[c] : m[c] + 1;
    r++;
    while(m[c] >1) {
      var c2=s[l];
      m[c2]--;
      l++;
    }
    res = Math.max(res, r-l)
  }
  return res;
};
