/**
 * @param {string} s
 * @return {string}
 */
var palindrome = function (s, l, r) {
  while (l >= 0 && r < s.length && s[l] == s[r]) {
    l--;
    r++;
  }
  return s.substr(l + 1, r-l+1);
};

var longestPalindrome = function (s) {
  var res = '';
  for (var i = 0; i < s.length; i++) {
    var s1 = palindrome(s, i, i);
    var s2 = palindrome(s, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
};

longestPalindrome('babad')
