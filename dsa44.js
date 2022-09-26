//https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let mid;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
