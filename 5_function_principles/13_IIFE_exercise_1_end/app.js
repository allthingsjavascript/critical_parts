'use strict';

(function() {
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    now = new Date(),
    message = 'Today is ' + days[now.getDay()] + ', ' + now.getDate() + '!';

  console.log(message);
})()
