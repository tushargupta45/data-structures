//https://leetcode.com/problems/height-checker/

const checkHeight = (heightsArr) => {
  if (heightsArr.length > 100 || heightsArr.length < 1) {
    return 0;
  }
  const initialHeights = [...heightsArr];
  let unmatchedIndices = 0;

  heightsArr.sort((a, b) => a - b);

  initialHeights.forEach((el, i) => {
    if (el > 100 || el < 1) {
      unmatchedIndices = 0;
      return;
    } else if (el !== heightsArr[i]) {
      unmatchedIndices++;
    }
  });
  return unmatchedIndices;
};
console.log(checkHeight([1, 1, 4, 2, 1, 3]));
