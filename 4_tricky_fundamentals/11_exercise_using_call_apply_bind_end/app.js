'use strict';

// Fix Callback Example 1
let obj = {
  name: 'Steve',
  displayName() {
    console.log(this.name);
  }
};

const doFunction = function(callback) {
  if (typeof callback === 'function') {
    callback();
  }
};

doFunction(obj.displayName.bind(obj));


// Fix Callback Example 3 using the same object
const title = document.getElementById('title2');

//title.addEventListener('click', obj.displayName.bind(obj));

title.addEventListener('click', function() {
  obj.displayName();
});