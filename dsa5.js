//https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

const firstPalindrome = (words) => {
  if (words.length > 100 || words.length < 1) {
    return "";
  }
  const palindromeStr = words.find((word) => {
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
console.log(firstPalindrome(a));
