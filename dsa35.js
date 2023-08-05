//https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSubsequence = function (nums, k) {
  let dataIndexArr = [];
  nums.forEach((num, i) => dataIndexArr.push([num, i]));
  dataIndexArr.sort((a, b) => b[0] - a[0]);
  dataIndexArr = dataIndexArr.splice(0, k);
  dataIndexArr.sort((a, b) => a[1] - b[1]);
  return dataIndexArr.map((el) => el[0]);
};

const n = [-1, -2, 3, 4];
console.log(maxSubsequence(n, 3));
