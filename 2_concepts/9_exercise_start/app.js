
let arr = Array(10000).fill(1);

const popIt = function() {
    arr.pop();
    if (arr.length > 0) {
        popIt();
    }
};

popIt();