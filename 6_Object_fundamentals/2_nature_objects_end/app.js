'use strict';

let dataName = 'final';
let dataVal = 80;

let obj = {
  fName: 'Steve',
  lName: 'Hancock',
  score: 90,
  pass: true,
  quizzes: ['q1', 'q2', 'q3'],
  created: new Date(),
  address: {
    street: '45 main',
    city: 'Lehi'
  },
  fullName() {
    return this.fName + ' ' + this.lName;
  },
  [dataName]: dataVal
};

// writable
// configurable
// enumerable

Object.defineProperty(obj, 'bDay', {
  value: 'May 25',
  writable: false,
  configurable: false,
  enumerable: false
});