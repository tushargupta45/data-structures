//https://leetcode.com/problems/height-checker/

var heightChecker = function (heights) {
  if (heights.length > 100 || heights.length < 1) {
    return 0;
  }
  const initialHeights = [...heights];
  let unmatchedIndices = 0;
  heights.sort((a, b) => a - b);
  initialHeights.forEach((el, i) => {
    if (el > 100 || el < 1) {
      unmatchedIndices = 0;
      return;
    } else if (el !== heights[i]) {
      unmatchedIndices++;
    }
  });
  return unmatchedIndices;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
