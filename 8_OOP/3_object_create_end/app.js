'use strict';

const objProto = {
  greet() {
    console.log(`Hi ${this.name}!`);
  }
};

let obj = Object.create(objProto);

obj.name = 'Steven';