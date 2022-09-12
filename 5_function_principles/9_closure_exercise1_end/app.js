'use strict';

const learners = ['Oswald', 'Tara', 'Lana', 'Nelson', 'Sabrina'];
// Using Closure
/* for (var i = 0; i < learners.length; i++) {
  function showLearner() {
    let learner = learners[i];
    setTimeout(function() {
      console.log(learner);
    }, 2000);
  }
  showLearner();
} */

/* for (var i = 0; i < learners.length; i++) {
  function showLearner() {
    let idx = i;
    setTimeout(function() {
      console.log(learners[idx]);
    }, 2000);
  }
  showLearner();
} */

// Using let
for (let i = 0; i < learners.length; i++) {
    setTimeout(function() {
      console.log(learners[i]);
    }, 2000);
}