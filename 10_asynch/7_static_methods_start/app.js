'use strict';

function timer(milli) {
  return new Promise((resolve, reject) => {
    if (!Number.isInteger(milli)) {
      reject('You must enter a valid number.');
    } else {
      setTimeout(() => {
        resolve(milli);
      }, milli);
    }
  });
};

let promise1 = fetch('https://jsonplaceholder.typicode.com/todos').then(resp => resp.json());

let promise2 = fetch('https://jsonplaceholder.typicode.com/posts').then(resp => resp.json());

let promise3 = fetch('https://jsonplaceholder.typicode.com/comments').then(resp => resp.json());

let promise4 = fetch('https://jsonplaceholder.typicode.com/photos').then(resp => resp.json());