'use strict';

const composeResults = (str, amount, max) => `${str} ${amount} out of ${max}`;

const finalScoreMsg = composeResults.bind(null, 'You earned a score of');

let result = finalScoreMsg(75, 100);