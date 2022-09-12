'use strict';

const initialize = function() {
   const buttons = [document.querySelector('#btn1'), document.querySelector('#btn2'), document.querySelector('#btn3')];

   let totalCnt = 0;

   const incDisplayCounters = function(cnt) {
      totalCnt++;
      console.log(`I have been clicked ${cnt} times. All 3 buttons have been clicked ${totalCnt} times.`);
   }

   for (let btn of buttons) {
      let cnt = 0;
      btn.addEventListener('click', function() {
         cnt++;
         incDisplayCounters(cnt);
      });
   }
};

initialize();

/* Each time a button is clicked, it should display 2 numbers. 
   - First, the number of times it has been clicked. 
   - Second, the accumative amount all 3 buttons have been clicked. (e.g. 'I have been clicked 3 times. All 3 buttons have been clicked 10 times.')
   - Use closure to make this happen.
*/