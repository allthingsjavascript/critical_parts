'use strict';

/* (function(name) {
  let greet = 'Good morning ',
      punct = '!';

  setTimeout(function() {
    console.log(greet + name + punct);
  }, 5000);
})('Steve'); */


(function() {
  let cnt = 0;
  let increment = 2;

  document.getElementById('btn1').addEventListener('click', function() {
    cnt++;
    console.log(cnt);
  });

  document.getElementById('btn2').addEventListener('click', function() {
    cnt += increment;
    console.log(cnt);
  });
})();