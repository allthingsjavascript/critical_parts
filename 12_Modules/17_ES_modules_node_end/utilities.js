"use strict";

const formatName = function(name) {
  return name.replace(/(\w+), (\w+)/, '$2 $1');
};

const upperCaseName = function(name) {
  return name.toUpperCase();
};

export {
  formatName,
  upperCaseName
};