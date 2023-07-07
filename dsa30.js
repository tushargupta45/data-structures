/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let index1 = 0;
  let index2 = 0;
  const set = new Set();
  while (!isNaN(nums1[index1]) && !isNaN(nums2[index2])) {
    if (nums1[index1] > nums2[index2]) {
      index2++;
    } else if (nums1[index1] < nums2[index2]) {
      index1++;
    } else {
      set.add(nums1[index1]);
      index1++;
      index2++;
    }
  }
  return Array.from(set);
};

console.log(intersection([0, 5, 8, 7, 2, 9, 7, 5], [1, 4, 8, 9]));
