'use strict';

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
};

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  // Add node to list
  add(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return this;
  }
  // Remove the tail from list
  remove() {

  }
  // Insert a node at a specific index
  insertAt(val, index) {

  }
  // Remove node from specific index
  removeAt(index) {

  }
  // Get index for specific node
  getIndex(val) {

  }
  // Get node for specific index
  getNode(index) {

  }
};