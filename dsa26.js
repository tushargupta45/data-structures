//https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = function (num) {
  if (1000 > num || num > 9999) {
    return 0;
  }
  const arr = [];
  arr.push(Math.floor(num / 1000));
  arr.push(Math.floor(num / 100) % 10);
  arr.push(Math.floor(num / 10) % 10);
  arr.push(num % 10);

  arr.sort((a, b) => a - b);

  return arr[0] * 10 + arr[1] * 10 + arr[2] + arr[3];
};

console.log(minimumSum(2932));
