//https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence

const canArrayMakeArithmeticProgression = (nums) => {
  const infinite = 10 ** 6;
  if (nums.length > 1000 || nums.length <= 1) {
    return false;
  }

  nums.sort((a, b) => a - b);
  const gap = nums[1] - nums[0];
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > infinite || nums[i] < -infinite) {
      return false;
    }
    if (nums[i + 1] - nums[i] !== gap) {
      return false;
    }
  }
  return true;
};
console.log(canArrayMakeArithmeticProgression([3, 5, 1]));
