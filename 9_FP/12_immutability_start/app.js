'use strict';

const scores = [90, 30, 60, 75, 80, 95, 20, 100];

const decimalScore = val => val/100;

let decimalScores = scores.map(decimalScore);

const passingScores = val => val >= 70;

let passScores = scores.filter(passingScores);