const getSum = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
};

const getSmallestNonZero = (arr) => {
  arr.sort((a, b) => a - b);
  let index = 0;
  while (arr[index] === 0) {
    index++;
  }
  return arr[index];
};

var minimumOperations = function (nums) {
  let operations = 0;
  while (nums.reduce((a, b) => a + b, 0)) {
    const smallest = getSmallestNonZero(nums);
    nums = nums.map((el) => {
      if (el > 0) {
        return el - smallest;
      } else {
        return 0;
      }
    });
    operations++;
  }
  return operations;
};

console.log(minimumOperations([1, 5, 0, 3, 5]));
