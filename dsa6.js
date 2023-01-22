//https://leetcode.com/problems/counting-words-with-a-given-prefix/

const countPrefix = (words, prefix) => {
  if (prefix.length > 100 || words.length > 100 || words.length < 1) {
    return 0;
  }

  let count = 0;

  words.forEach((word) => {
    if (word.startsWith(prefix)) {
      count++;
    }
  });

  return count;
};

const a = ["pay", "attention", "practice", "attend"];

console.log(countPrefix(a, "at"));
