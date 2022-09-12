'use strict';

let user1 = {
  id: 5,
  firstName: 'Steven',
  lastName: 'Hancock',
  isVerified: true,
  address: {
    street: 'West Main',
    number: 54,
    city: 'Lehi'
  }
};

const {firstName, lastName} = user1;

let id;

({id} = user1);

const {isVerified: verified} = user1;

const {age = 40} = user1;

const getFullName = function({firstName: fName, lastName: lName}) {
  return `${fName} ${lName}`;
};

let fullName = getFullName(user1);

const {address: {street, number, city}} = user1;

const {id: userId, firstName: fName, ...obj} = user1;

const users = [
  {id: 1, name: 'Steve'},
  {id: 2, name: 'Evy'},
  {id: 3, name: 'Brooklyn'},
  {id: 4, name: 'Eliza'}
];

const [,,{name: u3name}] = users;

for (let {id: uId, name: uName} of users) {
  console.log(uId, uName);
};