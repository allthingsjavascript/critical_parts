'use strict';

const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    throw new Error('Problem in button click');
    console.log('continue');
});

btn.addEventListener('error', function(e) {
    console.warn('Error occured');
});

window.onerror = function(message, url, line) {
    console.warn('and error has occured', message);
    return true;
};

test();