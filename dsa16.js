//https://leetcode.com/problems/finding-the-users-active-minutes/

const findingUsersActiveMinutes = (logs, k) => {
  logs.sort((a, b) => a[0] - b[0]);
  const id = new Map();
  for (let i = 0; i < logs.length; i++) {
    if (!id.has(logs[i][0])) {
      id.set(logs[i][0], []);
    }
    id.get(logs[i][0]).push(logs[i][1]);
  }
  const result = [];
  for (let i = 0; i < k; i++) {
    result.push(0);
  }

  id.forEach((val) => {
    const set = new Set(val);
    result[set.size - 1]++;
  });
  return result;
};

const l = [
  [0, 5],
  [1, 2],
  [0, 2],
  [0, 5],
  [1, 3],
  [0, 5],
  [1, 2],
  [0, 2],
  [0, 5],
  [1, 3],
];
console.log(findingUsersActiveMinutes(l, 5));
