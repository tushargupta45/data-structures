//https://leetcode.com/problems/missing-number

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = (nums) => {
  return (
    (nums.length * (nums.length + 1)) / 2 - nums.reduce((a, b) => a + b, 0)
  );
};

console.log(missingNumber([3, 0, 9, 0, 41]));
