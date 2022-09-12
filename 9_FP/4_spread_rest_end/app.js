'use strict';

const numbers = [1, 2, 3];
console.log(...numbers);

const multiply = (a, b, c) => a * b * c;
let results = multiply(...numbers);

const num2 = [3, 4, 5];
const newArray = [...numbers, ...num2];

const copyArray = [...numbers];
copyArray.push(4);

const obj = {name: 'Steve', favoriteNum: 32};
const newObj = {...obj};

//const sum = function() {console.log(arguments)};
const sum = (...args) => console.log(args);
sum(5, 6, 9, 10);