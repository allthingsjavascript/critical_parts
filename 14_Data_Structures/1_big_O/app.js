'use strict';

const factor = function(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}       // O(n)


const aBigint = function(num) {
  return BigInt(num * Number.MAX_SAFE_INTEGER)
};      // O(1)


const multiplyMatrix = function(n) {
  for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= n; j++) {
          console.log(i + ' * ' + j + ' = ' + (i*j))
      }
  }
}         // O(n^2)