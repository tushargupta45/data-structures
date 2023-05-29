var makeSimilar = function (nums, target) {
  const numsEven = [];
  const numsOdd = [];
  nums.forEach((num) => {
    if (num % 2 == 0) {
      numsEven.push(num);
    } else {
      numsOdd.push(num);
    }
  });
  const targetEven = [];
  const targetOdd = [];
  target.forEach((num) => {
    if (num % 2 == 0) {
      targetEven.push(num);
    } else {
      targetOdd.push(num);
    }
  });
  numsEven.sort((a, b) => a - b);
  numsOdd.sort((a, b) => a - b);
  targetEven.sort((a, b) => a - b);
  targetOdd.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < numsEven.length; i++) {
    result += Math.abs(numsEven[i] - targetEven[i]);
  }
  for (let i = 0; i < numsOdd.length; i++) {
    result += Math.abs(numsOdd[i] - targetOdd[i]);
  }
  return result / 4;
};
