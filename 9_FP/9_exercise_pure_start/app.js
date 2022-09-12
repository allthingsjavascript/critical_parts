'use strict';

// Refactor the following function into multiple functions focussed on a single action. Make those functions pure. The function that updates the DOM will of course not be pure.

const formatPostTitle = function(txt) {
  txt = txt.slice(0, 17);
  txt = txt + '...'; //padEnd could be used.
  txt = `<p class='post'>${txt}</p>`;
  let div = document.getElementById('post');
  div.innerHTML = txt;
};

formatPostTitle('Test Title String Legnth 27');