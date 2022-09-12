'use strict';

const asyncFunction = function(num) {
  return new Promise((resolve, reject) => {
    if (Number.isInteger(num)) {
      setTimeout(() => resolve('Promise Value'), num);
    } else {
      reject(num + ' is not valid.');
    }
  });
};

asyncFunction(4000)
  .then((val) => console.log("Yes!! " + val),
      (val) => console.log('Rejected! ' + val));

console.log("This code is asynchronous!");