'use strict';
let completedQuiz = 5;

/* let output;
if (completedQuiz > 9) {
  output = 'You have completed all quizzes.';
} else {
  output = 'You still have quizzes to complete.';
} */

let output = completedQuiz > 9 ? 'You have completed all quizzes.' : completedQuiz > 6 ? 'You still have a few quizzes to complete.' : 'You still have several quizzes to complete.';

// condition ? exprIfTrue : exprIfFalse