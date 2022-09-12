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

/* Promise.all([promise1, promise2, promise3, promise4])
  .then(arr => console.log(arr));

Promise.all([timer(6000), timer(1000), timer('3000')])
  .then(val => console.log(val))
  .catch(err => console.warn(err)); */

/* Promise.allSettled([timer(6000), timer(1000), timer('3000')])
  .then(val => console.log(val))
  .catch(err => console.warn(err)); */

/* Promise.any([timer('6000'), timer('1000'), timer('3000')])
  .then(val => console.log(val))
  .catch(err => console.warn(err)); */

Promise.race([timer(6000), timer(1000), timer('3000')])
  .then(val => console.log(val))
  .catch(err => console.warn(err));