'use strict';

let user = {
  first: 'Steven',
  last: 'Hancock',
  verified: true,
  address: {
    street: 'Main',
    number: '50',
    city: 'Lehi',
    former: {}
  },
  fullName() {
    return this.first + ' ' + this.last;
  },
  quizzes: [50,,60,70,80,,100,75,]
};

//let finalScore = user.results.score;

// console.log(user.fullName());

//let quiz4 = user.quizzes[3];

/* let finalScore;
if (user.results) {
  finalScore = user.results.score;
} */

//let finalScore = user.results && user.results.score;

//let quiz4 = user.quizzes && user.quizzes[3];

let finalScore = user.results?.score;

console.log(user.fullName?.());

let quiz4 = user.quizzes?.[3];

let num = 2;
let score4 = user.results?.['score' + num];