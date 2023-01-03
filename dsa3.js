//https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

const sumOddLengthSubarrays = (arr) => {
  let result = 0;
  for (let i = 0; i < arr.length; ++i) {
    result += parseInt(((i + 1) * (arr.length - i) + 1) / 2) * arr[i];
  }
  return result;
};

const a = [10, 11, 12, 22, 4, 5, 3, 5, 3];
console.log(sumOddLengthSubarrays(a));
