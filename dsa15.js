//https://leetcode.com/problems/find-the-original-array-of-prefix-xor/

const findArray = (prefArr) => {
  if (prefArr.length < 1 || prefArr.length > 10 ** 5) {
    return [];
  }
  const result = [prefArr[0]];
  let xor = prefArr[0];
  for (let i = 1; i < prefArr.length; i++) {
    if (prefArr[i] < 0 || prefArr[i] > 10 ** 6) {
      return [];
    }
    result.push(xor ^ prefArr[i]);
    xor = prefArr[i];
  }
  return result;
};
const inputArr = [5, 2, 0, 3, 1];
console.log(findArray(inputArr));
