//https://leetcode.com/problems/maximum-number-of-pairs-in-array

const numberOfPairs = (nums) => {
  let pairCount = 0;
  let i = 0;
  nums = nums.sort((a, b) => a - b);
  while (i < nums.length - 1) {
    if (nums[i] === nums[i + 1]) {
      pairCount++;
      i++;
    }
    i++;
  }
  return [pairCount, nums.length - 2 * pairCount];
};

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]));
