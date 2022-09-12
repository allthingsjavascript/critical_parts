'use strict';

const formatScores = function(scores) {
    scores.sort((a, b) => a - b);
    return scores.join(', ');
};

console.log(formatScores([100, 0, 50, 70, 85, 30]));
