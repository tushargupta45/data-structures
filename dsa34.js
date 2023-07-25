var dominantIndex = function (nums) {
  const max = Math.max(...nums);
  let count = 0;
  nums.forEach((num) => {
    if (num * 2 > max) {
      count++;
    }
  });
  if (count === 1) {
    return nums.findIndex((el) => el === max);
  } else {
    return -1;
  }
};
