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
const doEllipseHead = (len, txt) => txt.slice(0, (len - 3)) + '...';

const doEllipseHead20 = doEllipseHead.bind(null, 20);

const doHtmlHead = (cls, txt) => `<p class='${cls}'>${txt}</p>`;

const doHtmlHeadPost = doHtmlHead.bind(null, 'post');

const extractTxt = obj => obj.txt;

const stringToArray = (str) => str.split(' ');

const arrayToString = (array) => array.join(' ');

const makeLowerCase = str => str.toLowerCase();

const capFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const capEachWord = array => array.map(capFirstLetter);

const makeTitleCase = compose(
  arrayToString,
  capEachWord,
  stringToArray,
  makeLowerCase
);

const createPostHead = compose(
  doHtmlHeadPost,
  doEllipseHead20,
  makeTitleCase,
  extractTxt,
  cloneObj
);

let postHeadings = posts.map(createPostHead);