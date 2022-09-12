'use strict';

const globalNum = 9;

const newNum = (num) => num * globalNum;

const newNum2 = (num) => {
  if (globalNum != 9) {
    globalNum = 9;
  }
  return num * globalNum;
};

const newNumPure = (factor) => (num) => num * factor;

const newNumNew = newNumPure(9);

const scores = [90, 50, 70, 60];

const removeLastScore = (score) => score.pop();

//let lastScore = removeLastScore(scores);

const removeLastScorePure = (score) => [...score].pop();

let lastScore = removeLastScorePure(scores);