'use strict';

const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    throw new Error('Problem in button click');
    console.log('continue');
});



