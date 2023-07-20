var findTheDifference = function (s, t) {
  const tArr = t.split("").sort();
  const elementIndex = s
    .split("")
    .sort()
    .findIndex((el, i) => el !== tArr[i]);
  if (elementIndex > -1) {
    return tArr[elementIndex];
  } else {
    return tArr[tArr.length - 1];
  }
};

console.log(findTheDifference("abcd", "abcde"));
