
// A function can be assigned to a variable.
const fun10 = function() {return 10};

const fun10a = fun10;

// A function can be assigned to a property of an Object.
const obj = {
  fun() {console.log('fun')}
};

//obj.fun();

// A function can be stored in an array.
const arr = [10, () => 10];
//console.log(arr[1]());


// A function can be part of an expression.
console.log(30 + function() {return 10}());
console.log(30 + (() => 10)());


// A function can be passed to a function--think callbacks
setTimeout(() => console.log('time is up'), 1000);


// A function can be returned from a function.
const getFun = function() {
  return function() {
    console.log('I was returned');
  };
};

//const newFun = getFun();

getFun()();