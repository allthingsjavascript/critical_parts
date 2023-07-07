'use strict';

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.back = 0;
    this.size = 0;
  }
  enqueue(item) {
    
  }
  dequeue() {
    
  }
  check() {
    return this.items[this.front];
  }
};