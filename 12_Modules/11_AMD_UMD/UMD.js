(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD
      define(['eModule'], factory);
  } else if (typeof exports === 'object') {
      // Node, CommonJS-like
      module.exports = factory(require('eModule'));
  } else {
      // global method
      root.returnExports = factory(root.externalModule);
  }
}(this, function (externalModule) {
  function myFunc(){
      //do something
  };

  // public
  return myFunc;
}));