//https://leetcode.com/problems/two-furthest-houses-with-different-colors/

const maxDistance = (colorsArr) => {
  let length = colorsArr.length - 1;

  while (length > 0) {
    for (let i = 0; i < colorsArr.length - length; i++) {
      if (colorsArr[i] !== colorsArr[i + length]) {
        return length;
      }
    }

    length--;
  }
  return length;
};
const c = [1, 1, 1];
console.log(maxDistance(c));
