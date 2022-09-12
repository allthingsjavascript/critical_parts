'use strict';

const postProto = {
  getAge() {
    return new Date() - this.date;
  }
};

const createPost = function(text, dept) {
  let obj = Object.create(postProto);

  return Object.assign(obj, {
    text,
    dept,
    date: new Date()
  });
};

let post1 = createPost('Lorem ipsum dolor sit amet consectetur adipisicing elit', 'HR');

console.log(post1.getAge());