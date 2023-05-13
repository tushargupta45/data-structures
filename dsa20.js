/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */

const alreadyVisited = (path, arr) => {
  const existingNode = path.find(
    (node) => node[0] === arr[0] && node[1] === arr[1]
  );
  if (existingNode) {
    return true;
  }
  return false;
};

const spiralMatrixIII = function (rows, cols, rStart, cStart) {
  // right: 0
  // bottom: 1
  // left: 2
  // up: 3
  const path = [[rStart, cStart]];
  let col = cStart;
  let row = rStart;
  let prevOperation = 3;
  for (let i = 0; i < rows * cols - 1; i++) {
    if (prevOperation === 3) {
      if (col + 1 <= cols - 1 && !alreadyVisited(path, [row, col + 1])) {
        path.push([row, col + 1]);
        col++;
        prevOperation = 0;
      } else if (row + 1 <= rows - 1 && !alreadyVisited(path, [row + 1, col])) {
        path.push([row + 1, col]);
        row++;
        prevOperation = 1;
      } else if (col - 1 >= 0 && !alreadyVisited(path, [row, col - 1])) {
        path.push([row, col - 1]);
        col--;
        prevOperation = 2;
      } else if (row - 1 >= 0 && !alreadyVisited(path, [row - 1, col])) {
        path.push([row - 1, col]);
        row--;
        prevOperation = 3;
      }
    } else if (prevOperation === 0) {
      if (row + 1 <= rows - 1 && !alreadyVisited(path, [row + 1, col])) {
        path.push([row + 1, col]);
        row++;
        prevOperation = 1;
      } else if (col - 1 >= 0 && !alreadyVisited(path, [row, col - 1])) {
        console.log([row, col - 1]);
        console.log(path, i);
        path.push([row, col - 1]);
        col--;
        prevOperation = 2;
      } else if (row - 1 >= 0 && !alreadyVisited(path, [row - 1, col])) {
        path.push([row - 1, col]);
        row--;
        prevOperation = 3;
      } else if (col + 1 <= cols - 1 && !alreadyVisited(path, [row, col + 1])) {
        path.push([row, col + 1]);
        col++;
        prevOperation = 0;
      }
    } else if (prevOperation === 1) {
      if (col - 1 >= 0 && !alreadyVisited(path, [row, col - 1])) {
        path.push([row, col - 1]);
        col--;
        prevOperation = 2;
      } else if (row - 1 >= 0 && !alreadyVisited(path, [row - 1, col])) {
        path.push([row - 1, col]);
        row--;
        prevOperation = 3;
      } else if (col + 1 <= cols - 1 && !alreadyVisited(path, [row, col + 1])) {
        path.push([row, col + 1]);
        col++;
        prevOperation = 0;
      } else if (row + 1 <= rows - 1 && !alreadyVisited(path, [row + 1, col])) {
        path.push([row + 1, col]);
        row++;
        prevOperation = 1;
      }
    } else if (prevOperation === 2) {
      if (row - 1 >= 0 && !alreadyVisited(path, [row - 1, col])) {
        path.push([row - 1, col]);
        row--;
        prevOperation = 3;
      } else if (col + 1 <= cols - 1 && !alreadyVisited(path, [row, col + 1])) {
        path.push([row, col + 1]);
        col++;
        prevOperation = 0;
      } else if (row + 1 <= rows - 1 && !alreadyVisited(path, [row + 1, col])) {
        path.push([row + 1, col]);
        row++;
        prevOperation = 1;
      } else if (col - 1 >= 0 && !alreadyVisited(path, [row, col - 1])) {
        path.push([row, col - 1]);
        col--;
        prevOperation = 2;
      }
    }
  }
  return path;
};

console.log(spiralMatrixIII(1, 4, 0, 0));
