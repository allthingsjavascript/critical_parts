console.log(sum10);
console.log(sum10(5));

// Function Declaration
function sum10(num) {
    return num + 10;
};

console.log(sum100);
console.log(sum100(5));
// Function Expression
var sum100 = function (num) {
    return num + 100;
};

var sum1000 = (num) => {
    return num + 1000;
};