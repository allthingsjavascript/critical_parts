
let arr = Array(15000).fill(1);

const popIt = function() {
    arr.pop();
    if (arr.length > 0) {
        setTimeout(popIt,0);
    }
};

popIt();