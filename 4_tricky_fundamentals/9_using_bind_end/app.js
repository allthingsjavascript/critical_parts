'use strict';

/* function test() {
  console.log('test');
};

const newFun = test.bind();

newFun(); */

let obj = {
  name: 'Steve',
  displayName(greet, punct) {
    console.log(greet + this.name + punct);
  }
};

let obj2 = {
    name: 'Lynette'
};

const display = obj.displayName.bind(obj2, 'Hi ','!');

display();