//https://leetcode.com/problems/build-array-from-permutation/solutions/

const buildArray = function (numsArr) {
  if (numsArr.length < 1 || numsArr.length > 1000) {
    return -1;
  }
  numsArr.forEach((el) => {
    if (el > numsArr.length || el < 0) {
      return -1;
    }
  });
  return numsArr.map((el) => numsArr[el]);
};

const a = [0, 2, 1, 5, 3, 4];
console.log(buildArray(a));
