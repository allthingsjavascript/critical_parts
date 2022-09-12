//Generate a random number between 0 and 10 until you get a 5. How many times did it take? 
var endValue = 5,
    randNum,
    counter = 0;

while (randNum !== endValue) {
    randNum = Math.round(Math.random() * 10);
    counter++;
}

console.log(`It took ${counter} time(s) to reach ${randNum}`);