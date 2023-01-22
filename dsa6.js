//https://leetcode.com/problems/counting-words-with-a-given-prefix/

const prefixCount = function (words, pref) {
  if (pref.length > 100 || words.length > 100 || words.length < 1) {
    return 0;
  }
  let count = 0;
  words.forEach((word) => {
    if (word.startsWith(pref)) {
      count++;
    }
  });
  return count;
};

const a = ["pay", "attention", "practice", "attend"];
console.log(prefixCount(a, "at"));
