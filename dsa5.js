//https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

const getFirstPalindrome = (wordsArr) => {
  if (wordsArr.length > 100 || wordsArr.length < 1) {
    return "";
  }
  const palindromeStr = wordsArr.find((word) => {
    if (word.length > 100 || word.length < 1) {
      return "";
    }
    return word === word.split("").reverse().join("");
  });

  if (palindromeStr) {
    return palindromeStr;
  }
  return "";
};

const a = ["abc", "car", "racecar", "cool"];
console.log(getFirstPalindrome(a));
