'use strict';

const num1 = 5;

const logOut = function(msg) {
  console.log(msg);
};

const addPunct = function(str) {
  return str + '!';
};

const multiply = function(n1, n2) {
  return n1 * n2;
};

const multiplyBy5AndDisplay = function(n1, n2) {
  logOut(addPunct(multiply(n1, n2)));
};

multiplyBy5AndDisplay(num1, 6);