var mergeSimilarItems = function (items1, items2) {
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
