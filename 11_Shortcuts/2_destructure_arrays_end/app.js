'use strict';

let array1 = [10, 20, 30, 40, 50, 70, 100];

let [a, b, c] = array1;

let d, e;

[,,,d, e] = array1;

let [,,,,,,f = 60] = array1;

function fun1() {
  return [1, 2, 3];
};

const [num1, num2, num3] = fun1();

const [g, h, ...others] = array1;

let num4 = 100,
    num5 = 200;

[num4, num5] = [num5, num4];