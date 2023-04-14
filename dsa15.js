//https://leetcode.com/problems/find-the-original-array-of-prefix-xor/

const findArray = (pref) => {
  if (pref.length < 1 || pref.length > 10 ** 5) {
    return [];
  }
  const result = [pref[0]];
  let xor = pref[0];
  for (let i = 1; i < pref.length; i++) {
    if (pref[i] < 0 || pref[i] > 10 ** 6) {
      return [];
    }
    result.push(xor ^ pref[i]);
    xor = pref[i];
  }
  return result;
};
const a = [5, 2, 0, 3, 1];
console.log(findArray(a));
