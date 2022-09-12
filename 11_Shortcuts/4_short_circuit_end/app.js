'use strict';

let a = 5,
    b = 6,
    c;

let val = c || b || a;

let val2 = c && b && a;

function fun1() {
  console.log('fun1');
  return true;
};

function fun2() {
  console.log('fun2');
  return false;
};

function fun3() {
  console.log('fun3');
  return true;
};

//c && b && fun1();

//c || fun1();

//fun1() && fun3() && fun2();

let user = {
  name: 'Steven',
  isVerified: true,
};

console.log(user.isMember || 'Non-member');