//https://leetcode.com/problems/last-stone-weight/

const lastStoneWeight = function (stones) {
  stones.sort((a, b) => b - a);
  while (stones.length > 1) {
    const stone1 = stones.shift();
    const stone2 = stones.shift();
    if (stone1 - stone2) {
      stones.push(Math.abs(stone1 - stone2));
      stones.sort((a, b) => b - a);
    }
  }
  if (stones[0]) {
    return stones[0];
  } else {
    return 0;
  }
};

const arr = [2, 7, 4, 1, 8, 1];
console.log(lastStoneWeight(arr));
