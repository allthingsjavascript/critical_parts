

function recursion(num) {
    num = num + num;
    if (num > 99999999999) {
        console.log(num);
        return;
    }
    recursion(num);
};

recursion(1);