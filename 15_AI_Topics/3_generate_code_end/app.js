
function swapCharacters(str, c1, c2) {
  /* // Create an array to store the characters after replacement
  const result = [];

  // Iterate through each character in the input string
  for (let i = 0; i < str.length; i++) {
    const currentChar = str.charAt(i);

    // If the current character is c1, add c2 to the result array
    if (currentChar === c1) {
      result.push(c2);
    }
    // If the current character is c2, add c1 to the result array
    else if (currentChar === c2) {
      result.push(c1);
    }
    // If the current character is neither c1 nor c2, add it unchanged
    else {
      result.push(currentChar);
    } */
    str.replaceAll(c1,)
  }

  // Join the characters in the result array to form the final string
  return result.join('');
}

// Example usage:
const inputString = 'Hello, world!';
const resultString = swapCharacters(inputString, 'o', 'l');
console.log(resultString); // Output: "Helll, wold!"
