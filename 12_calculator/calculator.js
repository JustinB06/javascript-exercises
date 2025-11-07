const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((runningSum, currentNum) => runningSum + currentNum, 0);
};

const multiply = function (nums) {
  let total = 1;
  for (let num of nums) {
    total *= num;
  }
  return total;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  let total = 1;
  if (num === 0) return 1;
  else {
    for (let i = num; i > 1; i--) total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
