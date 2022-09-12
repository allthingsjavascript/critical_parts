'use strict';

function inefficientSquaring(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      result ++;
    }
  }
  return result;
}

/* console.log(inefficientSquaring(201));
console.log(inefficientSquaring(695));
console.log(inefficientSquaring(3450));
console.log(inefficientSquaring(66760)); */

console.log('Finally I can run.');


