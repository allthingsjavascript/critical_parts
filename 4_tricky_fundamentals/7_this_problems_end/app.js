'use strict';

/* let obj = {
  name: 'Steven',
  funct3() {
      console.log(3, this);
      const funct4 = function() {
          console.log(4, this);
      };
      funct4();
  }
};
obj.funct3(); */

/* const displayName = function() {
  console.log(this.name);
};

let obj = {
  name: 'Steve',
  displayName
};

console.log(obj.displayName());
const showName = obj.displayName;
console.log(showName()); */

// Callback Example 1
/* let obj = {
  name: 'Steve',
  displayName() {
    //console.log(this.name);
    console.log(this);
  }
};

const doFunction = function(callback) {
  if (typeof callback === 'function') {
    callback();
  }
};

doFunction(obj.displayName); */

// Callback Example 2
/* let obj = {
  name: 'Steve',
  displayName() {
    //console.log(this.name);
    console.log(this);
  }
};

setTimeout(obj.displayName, 2000); */

// Callback Example 3
let obj = {
  name: 'Steve',
  displayName() {
    //console.log(this.name);
    console.log(this);
  }
};

const title = document.getElementById('title2');

title.addEventListener('click', obj.displayName);