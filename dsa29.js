//https://leetcode.com/problems/maximum-units-on-a-truck/

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
const maximumUnits = (boxTypes, truckSize) => {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let units = 0;
  let currentIndex = 0;
  let iterations = 0;
  boxTypes.forEach((box, i) => (iterations += box[0]));
  for (let i = 0; i < Math.min(iterations, truckSize); i++) {
    if (boxTypes[currentIndex][0] > 0) {
      boxTypes[currentIndex][0]--;
      units += boxTypes[currentIndex][1];
    } else if (boxTypes[currentIndex + 1]) {
      boxTypes[currentIndex + 1][0]--;
      units += boxTypes[currentIndex + 1][1];
      currentIndex++;
    }
  }
  return units;
};

console.log(
  maximumUnits(
    [
      [1, 3],
      [5, 5],
      [2, 5],
      [4, 2],
      [4, 1],
      [3, 1],
      [2, 2],
      [1, 3],
      [2, 5],
      [3, 2],
    ],
    35
  )
);
