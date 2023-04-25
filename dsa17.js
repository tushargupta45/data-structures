//https://leetcode.com/problems/design-a-stack-with-increment-operation/

//STACK IMPLEMENTATON

class CustomStack {
  constructor(maxSize) {
    this.stack = [];
    this.maxSize = maxSize;
  }
}

//x is number
CustomStack.prototype.push = function (x) {
  if (this.stack.length < this.maxSize) {
    this.stack.push(x);
  }
};

//return number
CustomStack.prototype.pop = function () {
  if (this.stack.length) {
    return this.stack.pop();
  } else {
    return -1;
  }
};

//both input nums
CustomStack.prototype.increment = function (k, val) {
  const length = Math.min(k, this.stack.length);
  for (let i = 0; i < length; i++) {
    this.stack[i] += val;
  }
};
