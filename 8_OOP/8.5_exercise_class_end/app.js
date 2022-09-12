'use strict';

class Post {
  constructor(text, dept) {
    this.text = text;
    this.dept = dept;
    this.date = new Date();
  }

  getAge() {
    return new Date() - this.date;
  }
};

let post1 = new Post('Lorem ipsum dolor sit amet consectetur adipisicing elit', 'HR');

console.log(post1.getAge());
