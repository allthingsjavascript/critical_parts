'use strict';

const weirdArray = [0, 1, {}, null, undefined, function(){}, [], 'string'];

const exists = val => val != null;

const newArray = weirdArray.map(exists);