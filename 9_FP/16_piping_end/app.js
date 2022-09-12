'use strict';

let words = 'hockey suggest garlic key fence loop coin attend mobile bird effort bulk suggest trial agree garlic fence bird little garlic';

// fn1 -> data -> fn2 -> data -> fn3 -> data

// 1. make uppercase
const makeUpperCase = (str) => str.toUpperCase();

// 2. convert string to array of words
const stringToArray = (str) => str.split(' ');

// 3. remove duplicates from Array
const removeArrayDuplicates = (array) => new Set(array);

// 4. convert array like to array
const arrayLikeToArray = (arr) => [...arr];

// 5. convert array to string
const arrayToString = (array) => array.join(' ');

const toLowerCase = (str) => str.toLowerCase();


const pipe = (...fns) => (data) => fns.reduce((acc, fun) => fun(acc), data);

const uniquePassPhrase = pipe(
  makeUpperCase,
  stringToArray,
  removeArrayDuplicates,
  arrayLikeToArray,
  arrayToString,
  toLowerCase
);

let passPhrase = uniquePassPhrase(words);