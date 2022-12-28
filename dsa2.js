//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

const kidsWithCandies = (candies, extraCandies) => {
  const maxCandies = Math.max(...candies);
  const outputArr = [];
  candies.forEach((candy, index) => {
    if (candy + extraCandies >= maxCandies) {
      outputArr[index] = true;
    } else {
      outputArr[index] = false;
    }
  });
  return outputArr;
};

const c = [2, 3, 5, 1, 3];
console.log(kidsWithCandies(c, 3));
