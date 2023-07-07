'use strict';

function testFunction() {
  console.log('test function');
  function one() {
    console.log('function one');
    two();
  }
  function two() {
    console.log('function two');
  }
  one();
  two();
};