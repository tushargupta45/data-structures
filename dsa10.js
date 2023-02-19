//https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/

var maximumValue = function (strs) {
  let high = 0;
  strs.forEach((el) => {
    if (isNaN(Number(el))) {
      high = Math.max(high, el.length);
    } else {
      high = Math.max(high, parseInt(el));
    }
  });
  return high;
};

const strs = ["alic3", "bob", "3", "4", "00000"];
console.log(maximumValue(strs));
