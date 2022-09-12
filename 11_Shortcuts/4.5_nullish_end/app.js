'use strict';

// let val = leftExpr ?? rightExpr;

let val1,
    val2 = 50,
    val3 = 'string',
    val4 = null;

const newVal1 = val1 ?? val2;

const newVal2 = val2 ?? val3;

const newVal3 = val4 ?? val1 ?? val3;

function fun1() {
  console.log('fun1');
  return;
};

function fun2() {
  console.log('fun2');
  return false;
};

const newVal4 = val4 ?? fun1() ?? fun2();