var maxDistance = function (colors) {
  let length = colors.length - 1;
  while (length > 0) {
    for (let i = 0; i < colors.length - length; i++) {
      if (colors[i] !== colors[i + length]) {
        return length;
      }
    }
    length--;
  }
  return length;
};

const c = [1, 1, 1, 6, 1, 1, 1];
console.log(maxDistance(c));
