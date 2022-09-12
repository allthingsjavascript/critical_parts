'use strict';

// Example 1: Passing a reference to a method 
/* const displayName = function() {
  console.log(this.name);
};

let obj = {
  name: 'Steve',
  displayName
};

const showName = obj.displayName;
console.log(showName.apply(obj)); */

// Example 2: Callback with setTimeout
/* let obj = {
  name: 'Steve',
  displayName() {
    console.log(this.name);
  }
};

//setTimeout(obj.displayName, 2000);
//setTimeout(obj.displayName.call(obj), 2000);
//setTimeout(obj.displayName.bind(obj), 2000);
setTimeout(function() {
  obj.displayName();
}, 2000); */

// Example 3: Original problem we used to show how keyword this worked.
let obj = {
  name: 'Steven',
  funct3() {
      console.log(3, this);
      const funct4 = function() {
          console.log(4, this);
      }.bind(this);
      //funct4.apply(this);
      funct4();
  }
};
obj.funct3();