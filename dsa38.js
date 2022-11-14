/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const partitionArray = (nums, k) => {
  let dataIndexArr = [];
  nums.forEach((num, i) => dataIndexArr.push([num, i]));

  dataIndexArr.sort((a, b) => a[0] - b[0]);
  let subSeqIndex = 0;
  let result = [];
  for (let i = 1; i < dataIndexArr.length; i++) {
    if (dataIndexArr[i][0] - dataIndexArr[i - 1][0] <= k) {
      result[subSeqIndex].push();
    }
  }
};

const n = [3, 6, 1, 2, 5];
console.log(partitionArray(n, 2));
