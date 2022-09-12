'use strict';

/* const logCall = function() {
  console.log('This function was called back');
}; */

setTimeout(function() {
  console.log('This function was called back.');
}, 3000);

const logo = document.getElementById('jslogo');

logo.addEventListener("click", function(e) {
  console.log('The logo was clicked');
});