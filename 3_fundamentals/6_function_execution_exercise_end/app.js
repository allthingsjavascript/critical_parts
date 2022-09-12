
var sum = function() {
    console.log(num);
    var num = 10;
    console.log(this);
    function getNewNum() {
        var newNum = 100;
        console.log(newNum);
        console.log(this);
        return newNum;
    };
    console.log(num);
    console.log(newNum);
    var newNum = getNewNum();
    console.log(num + newNum);
};

sum();