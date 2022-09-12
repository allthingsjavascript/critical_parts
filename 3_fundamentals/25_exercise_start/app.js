
let scores = [90, 75, 80, 40];

const updateScores = function(arr, newScores) {
  let newScoresArray = arr;
  newScoresArray.push(...newScores);
  return newScoresArray;
};

let finalScores = updateScores(scores, [50, 65, 100]);

console.log(scores.length);
console.log(finalScores.length);


// Modify this code so that finalScores is a different array and the scores array is not mutated.