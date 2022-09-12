'use strict';

let stmt = 'Error handling in JavaScript is critical.';

const firstWord = function(str) {
    console.log(lastWord(str));
    return str.split(' ')[0];
};

const lastWord = function(str) {
    let wordArray = str.split(' ');
    return wordArray[wordArray.length - 1];
};

console.log(firstWord(stmt));

console.log(lastWord(stmt));