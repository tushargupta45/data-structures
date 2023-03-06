//https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence

var canMakeArithmeticProgression = function (arr) {
  const infinite = 10 ** 6;
  if (arr.length > 1000 || arr.length <= 1) {
    return false;
  }
  arr.sort((a, b) => a - b);
  const gap = arr[1] - arr[0];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > infinite || arr[i] < -infinite) {
      return false;
    }
    if (arr[i + 1] - arr[i] !== gap) {
      return false;
    }
  }
  return true;
};

console.log(canMakeArithmeticProgression([3, 5, 1]));
