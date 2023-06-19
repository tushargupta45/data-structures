//https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = (nums) => {
  if (nums.length < 2 || nums.length > 500) {
    return [];
  }
  const initialNums = [...nums];
  nums.sort((a, b) => a - b);
  return initialNums.map((num) => {
    if (num >= 0 && num <= 100) {
      return nums.findIndex((n) => n === num);
    }
  });
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
