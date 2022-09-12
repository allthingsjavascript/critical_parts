'use strict';

const plainFunction = async function() {
  console.log('start');
  let response = await fetch('https://jsonplaceholder.typicode.com/todos');
  let json = await response.json();
  console.log(json);
  // other code
  let complet = json.filter(obj => obj.completed);
  console.log(complet);
};

plainFunction();

console.log('When will this display?');

/* async function plainFunction() {
  console.log('start');
  return 'done';
};

const plainFunction = async () => {
  console.log('start');
  return 'done';
}; */

//let result = plainFunction();

/* plainFunction()
  .then(val => console.log(val)); */