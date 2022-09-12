'use strict';

const scores1 = [30, 50, 40, 60];
const scores2 = [100, 90, 70, 80];
const user1 = {
  first: 'Steven',
  last: 'Hancock',
  score1: 80
};

// Combine the scores arrays into a new array. Include the scores2 scores first.
const newScores = [...scores2, ...scores1];


// Make a copy of the user1 object. Then add a second score to the new object.
const user1Copy = {...user1};
user1Copy.score2 = 70;

// Write a function that will accept any number of scores and return all those scores as an array. Use the arrow function syntax.
const gatherScores = (...args) => args;
const scores3 = gatherScores(100, 50, 60, 70);
