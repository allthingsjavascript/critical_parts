'use strict';

const countSession = () => {
  //Code to count session.
  console.log('Session was counted.');
};

const sessionCounted = () => {
  console.log('Already done.');
};

const onlyOnce = (fn) => {
  let once = false;
  return (...args) => {
    if (!once) {
      once = true;
      fn(...args);
    }
  }
};

const onlyOnceAndThen = (fn1, fn2) => {
  let once = false;
  return (...args) => {
    if (once) {
      fn2(...args);
    } else {
      once = true;
      fn1(...args);
    }
  }
};

//const countSessionOnce = onlyOnce(countSession);
const countSessionAndThen = onlyOnceAndThen(countSession, sessionCounted);