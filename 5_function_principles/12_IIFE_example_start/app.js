'use strict';

const delayedGreeting = function(name) {
  let greet = 'Good morning ',
      punct = '!';

  setTimeout(function() {
    console.log(greet + name + punct);
  }, 5000);
};

delayedGreeting('Steve');