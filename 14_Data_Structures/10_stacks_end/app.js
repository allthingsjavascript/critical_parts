'use strict';

class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }
  push(item) {
    this.items.push(item);
    return ++this.size;
  }
  pop() {
    if (this.size === 0) return null;
    this.size--;
    return this.items.pop();
  }
  check() {
    return this.items[this.size -1];
  }
};