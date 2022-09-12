'use strict';

let obj = {
  name: 'Steven',
  greeting() {
    console.log(`Hello ${this.name}!`)
  }
}


let date = new Date();
date.showThis = function() {
  console.log(this);
};

let obj2 = {
  name: 'Lynette',
  greeting: obj.greeting()
};