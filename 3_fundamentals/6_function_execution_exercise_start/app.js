
var sum = function() {
    console.log(num);
    var num = 10;

    function getNewNum() {
        var newNum = 100;
        console.log(newNum);
        return newNum;
    };
    console.log(num);
    console.log(newNum);
    var newNum = getNewNum()
    console.log(num + newNum);
};

sum();