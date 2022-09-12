'use strict';

const names = ['Steven', 'Adam', 'Jose', 'Brianna', 'Dara'];
const nums = [100, 95, 45, 10, 25, 5, 70];

const str1 = 'This is a string.';

names.sort();
nums.sort(function(a, b) {
  return a - b;
});


const processString = function(str, callback) {
  let newStr = str.toUpperCase();
  if (typeof callback === 'function') {
    return callback(newStr);
  }
  return newStr;
};

console.log(processString(str1, function(val) {
  return val.split(' ');
}));