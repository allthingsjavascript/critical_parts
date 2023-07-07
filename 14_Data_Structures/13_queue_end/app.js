'use strict';

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.back = 0;
    this.size = 0;
  }
  enqueue(item) {
    this.items[this.back] = item;
    this.back++;
    return ++this.size;
  }
  dequeue() {
    if (this.size === 0) return null;
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    this.size--;
    return item;
  }
  check() {
    return this.items[this.front];
  }
};