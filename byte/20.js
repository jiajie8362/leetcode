/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  if (!s) {
    return true;
  }
  var i = 0;
  var stack = [];
  while (i < s.length) {
    var c = s[i];
    if (c == '(' || c == '[' || c == '{') {
      stack.push(c);
      i++;
    } else {
      var t = stack.pop();
      if((t == '(' && c ==')') || (t == '[' && ct ==']') || (t == '{' && c =='}')) {
        i++;
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
isValid('()')
