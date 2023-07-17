//https://leetcode.com/problems/missing-number

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  return (
    (nums.length * (nums.length + 1)) / 2 - nums.reduce((a, b) => a + b, 0)
  );
};

console.log(missingNumber([3, 0, 1]));
