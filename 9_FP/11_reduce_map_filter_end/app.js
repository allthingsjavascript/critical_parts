'use strict';

const scores = [90, 30, 60, 75, 80, 95, 20, 100];

let sum = 0;
for (let i = 0; i < scores.length; i++) {
  sum += scores[i];
};

const sumFun = (accum, curVal) => accum + curVal;

sum = scores.reduce(sumFun, 0);

const sumCountAverage = (accumObj, curVal) => ({sum: accumObj.sum + curVal, count: accumObj.count + 1, average: (accumObj.sum + curVal) / (accumObj.count + 1)});

let result = scores.reduce(sumCountAverage, {sum: 0, count: 0, average: 0});

const decimalScore = val => val/100;

let decimalScores = scores.map(decimalScore);

const passingScores = val => val >= 70;

let passScores = scores.filter(passingScores);