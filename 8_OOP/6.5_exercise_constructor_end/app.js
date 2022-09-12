'use strict';

const Post = function(text, dept) {
  this.text = text;
  this.dept = dept;
  this.date = new Date();
};

Post.prototype.getAge = function() {
  return new Date() - this.date;
};

let post1 = new Post('Lorem ipsum dolor sit amet consectetur adipisicing elit', 'HR');

console.log(post1.getAge());
