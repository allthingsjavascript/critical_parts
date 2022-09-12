'use strict';

let arr = [1, 2, 3, 4, 5];
let obj = {
  fName: 'Steven',
  lName: 'Hancock'
};

let obj2 = {
  fullName() {
    return this.fName + ' ' + this.lName;
  }
};

let obj3 = Object.create(obj2);
obj3.fName = 'Lynette';
obj3.lName = 'Jorgensen';