//https://leetcode.com/problems/rotate-image/

const rotate = function (matrix) {
  const l = matrix.length;
  matrix.reverse();
  let swap;
  for (let i = 0; i < l; i++) {
    for (let j = i; j < l; j++) {
      swap = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = swap;
    }
  }
};

const m = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotate(m);
