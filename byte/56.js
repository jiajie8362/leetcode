/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (!intervals) {
    return [];
  }
  intervals.sort(function(a, b) {
    return a[0] - b[0];
  });
  var res = [];
  res.push(intervals[0]);
  for (var i = 1; i < intervals.length; i++) {
    cur = intervals[i];
    last = res[res.length-1];
    if(cur[0] <= last[1]) {
      last[1] = Math.max(last[1], cur[1]);
    } else {
      res.push(cur)
    }
  }
  return res;
};
