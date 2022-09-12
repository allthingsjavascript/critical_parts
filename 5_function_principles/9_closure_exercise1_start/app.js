'use strict';

const learners = ['Oswald', 'Tara', 'Lana', 'Nelson', 'Sabrina'];

for (var i = 0; i < learners.length; i++) {
  setTimeout(function() {
    console.log(learners[i]);
  }, 2000);
}
