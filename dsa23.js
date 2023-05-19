const likeTimeCoefficient = (arr) => {
  let sum = 0;
  arr.forEach((val, index) => {
    sum += val * (index + 1);
  });
  return sum;
};

var maxSatisfaction = function (satisfaction) {
  if (satisfaction.length > 500 || satisfaction.length < 1) {
    return 0;
  }
  satisfaction.sort((a, b) => a - b);
  let result = likeTimeCoefficient(satisfaction);
  while (satisfaction[0] < 0) {
    result = Math.max(likeTimeCoefficient(satisfaction), result);
    satisfaction.shift();
  }
  if (result < 0) {
    return 0;
  } else {
    return result;
  }
};

const s = [4, 3, 2];
console.log(maxSatisfaction(s));
