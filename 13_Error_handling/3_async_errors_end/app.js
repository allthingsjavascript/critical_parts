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


/* asyncTest(false)
    .then(resp => console.log('Resolved: ', resp),
    message => console.warn('Rejected: ', message)); */

/* asyncTest(false)
    .then(resp => console.log('Resolved: ', resp))
    .catch(msg => console.warn(msg)); */

/* (async function data() {
    try {
        let resp = await asyncTest(false)
        console.log(resp);
    } catch(e) {
        console.warn(e);
    }
})(); */

const checkFetch = function(response) {
    if (!response.ok) {
        throw new Error(response.statusText + ' - ' + response.url);
    }
    return response;
};

/* const retrieveToDo = function(num) {
    fetch('https://jsonplaceholder.typicode.com/todos/' + num)
        .then(checkFetch)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(json => console.log(json))
        .catch(err => console.warn(err));
}; */

const retrieveToDo = async function(num) {
    try {
        let resp = await fetch('https://jsonplaceholder.typicode.com/todos/' + num);
        resp = await checkFetch(resp);
        let data = await resp.json();
        console.log(data);
    } catch(e) {
        console.warn(e);
    }
};

retrieveToDo(5000);
