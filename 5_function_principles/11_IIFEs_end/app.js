'use strict';

const sum = function() {
  return 5 + 5;
}();

const sum10 = function(num) {
  const num1 = 10;
  return num + num1;
}(5);

// Use Cases
// Private Data
// Avoid global variables and variable collision

(function() {
  const punct = '!';
  const title2 = document.querySelector('#title2');

  title2.addEventListener('mouseover', (e) => document.body.style.cursor = 'pointer');

  title2.addEventListener('mouseout', (e) => document.body.style.cursor = 'default');

  title2.addEventListener('click', (e) => console.log(title2.innerText + punct));
}());