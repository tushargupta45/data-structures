//https://leetcode.com/problems/build-array-from-permutation/solutions/

const buildArray = function (nums) {
  if (nums.length < 1 || nums.length > 1000) {
    return -1;
  }
  nums.forEach((el) => {
    if (el > nums.length || el < 0) {
      return -1;
    }
  });
  return nums.map((el) => nums[el]);
};
const a = [0, 2, 1, 5, 3, 4];
//call function
console.log(buildArray(a));
