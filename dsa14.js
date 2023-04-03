//https://leetcode.com/problems/last-stone-weight/

const lastStoneWeight = (stonesArr) => {
  stonesArr.sort((a, b) => b - a);

  while (stonesArr.length > 1) {
    const stone1 = stonesArr.shift();
    const stone2 = stonesArr.shift();

    if (stone1 - stone2) {
      stonesArr.push(Math.abs(stone1 - stone2));
      stonesArr.sort((a, b) => b - a);
    }
  }
  if (stonesArr[0]) {
    return stonesArr[0];
  } else {
    return 0;
  }
};

const arr = [2, 7, 4, 1, 8, 1, 5, 2, 4, 6, 3, 5];
console.log(lastStoneWeight(arr));
