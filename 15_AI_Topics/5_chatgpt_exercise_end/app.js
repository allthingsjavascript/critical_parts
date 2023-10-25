
function createRomanNum(num) {
  if (num <= 0 || num >= 4000) {
    return "Invalid input. Please enter a number between 1 and 3999.";
  }

  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = '';

  for (const symbol in romanNumerals) {
    while (num >= romanNumerals[symbol]) {
      result += symbol;
      num -= romanNumerals[symbol];
    }
  }

  return result;
};


console.log(createRomanNum(3549)); // Outputs: "MMMDXLIX"
console.log(createRomanNum(3999)); // Outputs: "MMCMXCIX"
console.log(createRomanNum(0));


console.assert(createRomanNum(3999) === 'MMMCMXCIX', `converting 3999`);
console.assert(createRomanNum(5000) === 'Invalid input. Please enter a number between 1 and 3999.', `testing invalid positive number`);
console.assert(createRomanNum(-10) === 'Invalid input. Please enter a number between 1 and 3999.', `testing invalid negative number`);
console.assert(createRomanNum(1000) === 'M', `converting 1000`);
console.assert(createRomanNum(88) === 'LXXXVIII', `converting 98`);
console.assert(createRomanNum(17) === 'XVII', `converting 17`);