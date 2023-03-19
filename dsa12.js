//https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence

const canArrayMakeArithmeticProgression = (numsArr) => {
  const infinite = 10 ** 6;
  if (numsArr.length > 1000 || numsArr.length <= 1) {
    return false;
  }
  numsArr.sort((a, b) => a - b);
  const gap = numsArr[1] - numsArr[0];
  for (let i = 1; i < numsArr.length - 1; i++) {
    if (numsArr[i] > infinite || numsArr[i] < -infinite) {
      return false;
    }
    if (numsArr[i + 1] - numsArr[i] !== gap) {
      return false;
    }
  }
  return true;
};

console.log(canArrayMakeArithmeticProgression([3, 5, 1]));
