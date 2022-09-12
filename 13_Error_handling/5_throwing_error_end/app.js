'use strict';

const formatScores = function(scores) {
    if (!Array.isArray(scores)) {
        throw new Error('formatScores(): This function requires an array as an argument.');
    }
    scores.sort((a, b) => a - b);
    return scores.join(', ');
};

console.log(formatScores([100, 0, 50, 70, 85, 30]));

console.log(formatScores('string'));