'use strict';

let obj = {
    data: 32345,
    getData() {
        return this.data;
    }
}

function asyncTest(bool) {
    return new Promise((resolve, reject) => {
        let a = obj.getData();
        if (bool) {
            resolve(`Success-${a}`);
        } else {
            reject('Failure');
        }
    })
};



