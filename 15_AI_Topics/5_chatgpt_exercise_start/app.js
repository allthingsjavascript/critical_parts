
function createRomanNum(num) {

};





console.assert(createRomanNum(3999) === 'MMMCMXCIX', `converting 3999`);
console.assert(createRomanNum(5000) === 'Invalid number', `testing invalid positive number`);
console.assert(createRomanNum(-10) === 'Invalid number', `testing invalid negative number`);
console.assert(createRomanNum(1000) === 'M', `converting 1000`);
console.assert(createRomanNum(88) === 'LXXXVIII', `converting 98`);
console.assert(createRomanNum(17) === 'XVII', `converting 17`);