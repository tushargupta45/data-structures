var partitionArray = function (nums, k) {
  let dataIndexArr = [];
  nums.forEach((num, i) => dataIndexArr.push([num, i]));
  dataIndexArr.sort((a, b) => a[0] - b[0]);
  console.log(dataIndexArr);
  let subSeqIndex = 0;
  let result = [];
  for (let i = 1; i < dataIndexArr.length; i++) {
    if (dataIndexArr[i][0] - dataIndexArr[i - 1][0] <= k) {
      result[subSeqIndex].push();
    }
  }
};
