'use strict';

function inefficientSquaring(num) {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(num)) {
      reject('Not a valid Number.');
    } else {
      setTimeout(() => {
        let result = 0;
        for (let i = 1; i <= num; i++) {
          for (let j = 1; j <= num; j++) {
            result ++;
          }
        }
        resolve(result);
      });
    }
  });
};

inefficientSquaring(66760)
  .then(val => console.log(val), msg => console.error(msg));

/* console.log(inefficientSquaring(201));
console.log(inefficientSquaring(695));
console.log(inefficientSquaring(3450));
console.log(inefficientSquaring(66760)); */

console.log('Finally I can run.');





/* new Promise((resolve, reject) => {
  resolve('value');
  reject('value');
}); */


