'use strict';

const asyncFunction = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise Value'), 4000);
  });
};