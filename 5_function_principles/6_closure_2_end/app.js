'use strict';

const getFunction = function(num1) {
  //const num1 = 5;

  const logOut = function(msg) {
    console.log(msg);
  };

  const addPunct = function(str) {
    return str + '!';
  };

  const multiply = function(n1, n2) {
    return n1 * n2;
  };

  return function(n2) {
    logOut(addPunct(multiply(num1, n2)));
  };
};

const multiplyBy5AndDisplay = getFunction(5);
const multiplyBy10AndDisplay = getFunction(10);