'use strict';

const getFunction = function(index) {
  //const num1 = 5;
  // retrieves data from a database or site api
  const hugeArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

  const logOut = function(msg) {
    console.log(msg);
  };

  const addPunct = function(str) {
    return str + '!';
  };

  const multiply = function(n1, n2) {
    return n1 * n2;
  };

  const updateArray = function(newNum) {
    if (newNum > 100) {
      hugeArray.push(newNum);
    }
  };

  const createFun = function(n2) {
    logOut(addPunct(multiply(hugeArray[index], n2)));
  };

  return {
    updateArray: updateArray,
    createFun: createFun
  }
};

const obj = getFunction();

/* const multiplyBy5AndDisplay = getFunction(5);
const multiplyBy10AndDisplay = getFunction(10); */