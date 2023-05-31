/**
 * @param {number[]} nums
 * @param {number[]} target
 * @return {number}
 */
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

const n = [
  758, 334, 402, 1792, 1112, 1436, 1534, 1702, 1538, 1427, 720, 1424, 114, 1604,
  564, 120, 578,
];
const t = [
  1670, 216, 1392, 1828, 1104, 464, 678, 1134, 644, 1178, 1150, 1608, 1799,
  1156, 244, 2, 892,
];

console.log(makeSimilar(n, t));
