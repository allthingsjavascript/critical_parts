'use strict';

const scores = [0.9, 0.3, 0.6, 0.75, 0.8, 0.95, 0.2, 1];



const multiplyTwoNumbers = (num1, num2) => num1 * num2;

const curriedMultiply = num1 => num2 => num1 * num2;

/* const curriedMultiply = function(num1) {
  return function(num2) {
    return num1 * num2;
  }
}; */

console.log(curriedMultiply(100)(5));

let multiplyBy100 = curriedMultiply(100);

let decimalScores = scores.map(multiplyBy100);