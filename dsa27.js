//https://leetcode.com/problems/merge-similar-items

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
const mergeSimilarItems = (items1, items2) => {
  const result = [];
  const set = new Set();

  items1.forEach((i) => set.add(i[0]));

  items2.forEach((i) => set.add(i[0]));

  const allItems = [...items1, ...items2];
  set.forEach((val) => {
    let sum = 0;
    allItems.forEach((item) => {
      if (item[0] === val) {
        sum += item[1];
      }
    });

    result.push([val, sum]);
  });
  return result.sort((a, b) => a[0] - b[0]);
};

const i1 = [
  [1, 1],
  [4, 5],
  [3, 8],
];
const i2 = [
  [3, 1],
  [1, 5],
  [3, 1],
  [1, 5],
];

console.log(mergeSimilarItems(i1, i2));
