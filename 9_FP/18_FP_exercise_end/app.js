'use strict';

const compose = (...fns) => (data) => fns.reduceRight((acc, fun) => fun(acc), data);

const pipe = (...fns) => (data) => fns.reduce((acc, fun) => fun(acc), data);

/* Compose a function that will receive a string and make it title case (e.g. Title Case). If you would like, include it in the previous exercise. */

const str = 'Make THIS string title Case.';

// 1. Convert string lowercase
// 2. Break string apart by words
// 3. Capitalize the first letter
// 4. Join the words back together

const stringToArray = (str) => str.split(' ');

const arrayToString = (array) => array.join(' ');

const makeLowerCase = str => str.toLowerCase();

const capFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const capEachWord = array => array.map(capFirstLetter);

const makeTitleCase = compose(
  arrayToString,
  capEachWord,
  stringToArray,
  makeLowerCase
);

let results = makeTitleCase(str);