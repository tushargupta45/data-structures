//https://leetcode.com/problems/flipping-an-image/

const flipAndInvertImage = (img) => {
  let error = false;
  const n = img.length;
  const invertImg = (num) => {
    if (num === 0) {
      return 1;
    } else if (num === 1) {
      return 0;
    } else {
      error = true;
    }
  };
  img = img.map((row) => {
    if (row.length !== n) {
      error = true;
      return;
    }
    row = row.map((col) => invertImg(col));
    return row.reverse();
  });
  if (error) {
    return -1;
  } else {
    return img;
  }
};

const i = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];
console.log(flipAndInvertImage(i));
