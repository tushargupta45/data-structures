//https://leetcode.com/problems/matrix-cells-in-distance-order

const getAllCellsDistOrder = (rows, cols, rCenter, cCenter) => {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const distance = Math.abs(rCenter - i) + Math.abs(cCenter - j);

      matrix.push([i, j, distance]);
    }
  }
  matrix.sort((a, b) => a[2] - b[2]);

  return matrix.map((row) => [row[0], row[1]]);
};

console.log(getAllCellsDistOrder(2, 3, 1, 2));
