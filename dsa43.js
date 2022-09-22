//https://leetcode.com/problems/arranging-coins/

/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = (n) => {
  if (n == 1) {
    return 1;
  }
  let count = 1;
  let sum = 0;

  while (sum + count <= n) {
    sum += count;
    count++;
  }
  return count - 1;
};

console.log(arrangeCoins(6));
