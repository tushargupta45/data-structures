/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (n === 1 || isBadVersion(1)) {
      return 1;
    }
    let left = 1;
    let right = n;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (isBadVersion(mid) && isBadVersion(mid + 1)) {
        right = mid - 1;
      } else if (!isBadVersion(mid) && !isBadVersion(mid + 1)) {
        left = mid + 1;
      } else {
        return mid + 1;
      }
    }
    if (right === left) {
      return left + 1;
    } else return left;
  };
};
