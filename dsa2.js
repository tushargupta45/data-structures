const kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies);
  const output = [];
  candies.forEach((candy, index) => {
    if (candy + extraCandies >= maxCandies) {
      output[index] = true;
    } else {
      output[index] = false;
    }
  });
  return output;
};

const c = [2, 3, 5, 1, 3];
console.log(kidsWithCandies(c, 3));
