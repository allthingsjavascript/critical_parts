'use strict';

let obj = {
  fName: 'Steven',
  lName: 'Hancock',
  fullName() {
    return `${this.fName} ${this.lName}`;
  },
  instructor: true
};

/* Big O for Objects

    - Insertion  obj.active = true;        - O(1)
    - Deletion   delete obj.instructor;    - O(1)
    - Searching  for (let prop in obj {})  - O(n)
    - Access     obj.fName;                - O(1)
*/


let array1 = [1, 2, 'string', {}];

/* Big O for Arrays

    - Insertion  array1.push(true);           - O(1) depends
                 array1.unshift(false);       - O(n)
    - Deletion   array1.pop();                - O(1) depends
                 array1.shift();              - O(n)
    - Searching  for (let elem of array1) {}  - O(n)
    - Access     array1[2];                   - O(1)
*/