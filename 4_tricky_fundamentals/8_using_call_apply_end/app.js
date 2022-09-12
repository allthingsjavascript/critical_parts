'use strict';

function test() {
  console.log('test');
};

//test();
//test.call();
//test.apply();

let obj = {
  name: 'Steve',
  displayName(greet, punct) {
    console.log(greet + this.name + punct);
  }
};

let obj2 = {
  name: 'Lynette'
};

//obj.displayName.call(obj2, 'Hi ', '!');
obj.displayName.apply(obj2, ['Hello ', '.']);
