'use strict';

let stmt = 'Error handling in JavaScript is critical.';

const firstWord = function(str) {
    try {
        console.log(lastWord(str));
        //let newStr = comm.getString();
        /* let e = new SyntaxError('comm is not defined');
        e.writtenBy = 'Steven';
        throw e; */
        return str.split(' ')[0];
    } catch(err) {
        alert('No communication string provided.');
        return null;
    } finally {
        console.log('firstword function completed. Close comm.');
    }
};

const lastWord = function(str) {
    let wordArray = str.split(' ');
    return wordArray[wordArray.length - 1];
};

console.log(firstWord(stmt));

console.log(lastWord(stmt));