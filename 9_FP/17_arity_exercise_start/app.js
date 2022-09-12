'use strict';

const posts = [
  {id: 1, txt: 'First post for testing purposes.'},
  {id: 2, txt: 'Second post for testing purposes.'},
  {id: 3, txt: 'Third post for testing purposes.'},
  {id: 4, txt: 'Fourth post for testing purposes.'}
];

const compose = (...fns) => (data) => fns.reduceRight((acc, fun) => fun(acc), data);

const cloneObj = obj => { return {...obj} };


/* Compose a function that can be used with map to create an array of post heading for each object in the posts array. */


// Functions for developing post heading.
const doEllipseHead = (txt, len) => txt.slice(0, (len - 3)) + '...';

const doHtmlHead = (txt, cls) => `<p class='${cls}'>${txt}</p>`;


