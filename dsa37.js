const checkIfArithmetic = (arr) => {
  arr.sort((a, b) => a - b);
  const diff = arr[1] - arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== diff) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const result = [];
  for (let i = 0; i < l.length; i++) {
    let numsCopy = [...nums];
    numsCopy = numsCopy.splice(l[i], r[i] - l[i] + 1);
    result.push(checkIfArithmetic(numsCopy));
  }
  return result;
};

const n = [4, 6, 5, 9, 3, 7];
const L = [0, 0, 2];
const R = [2, 3, 5];

console.log(checkArithmeticSubarrays(n, L, R));
