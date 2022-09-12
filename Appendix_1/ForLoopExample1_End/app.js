//Find where the third B is in the sentence
var sentence = "The red bear jumped over the Big fence!",
    backward = "";

for (var i = sentence.length - 1; i >= 0; i--) {
    backward = backward + sentence.charAt(i);
}

console.log(backward);