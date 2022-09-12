'use strict';

const scores = [100,0,90,50,70,0,20];

/* let hasScore = scores.map(score => {
  if (score) {
    return true;
  } else {
    return false;
  }
}); */

let hasScore = scores.map(score => !!score);

//let hasScore = scores.map(score => Boolean(score));