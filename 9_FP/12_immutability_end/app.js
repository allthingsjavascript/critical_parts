'use strict';

const scores = [90, 30, 60, 75, 80, 95, 20, 100];

const decimalScore = val => val/100;

let decimalScores = scores.map(decimalScore);

const passingScores = val => val >= 70;

let passScores = scores.filter(passingScores);


const removeLastScorePure = (score) => [...score].pop();

let lastScore = removeLastScorePure(scores);


const user = {
  name: 'Steve',
  attempts: 1,
  scores: [90, 80]
};

const cloneObj = obj => { return {...obj} };

// const cloneObj = obj => Object.assign({}, obj);

// const cloneObj = obj => JSON.parse(JSON.stringify(obj));

const updateAttempts = obj => {
  obj.attempts += 1;
  return obj;
};

let newObj = updateAttempts(cloneObj(user));

let newObj2 = cloneObj(user);

newObj2.scores.push(80);