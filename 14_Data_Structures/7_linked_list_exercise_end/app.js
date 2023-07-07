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
    if (!this.head) return undefined;

    // find the node right before the tail
    let curNode = this.head;
    let newTail = curNode;
    while(curNode.next) {
      newTail = curNode;
      curNode = curNode.next
    }
    // set the new tail
    newTail.next = null;
    this.tail = newTail;
    // establish size
    this.size--;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return curNode;
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

let list = new LinkedList();
list.add(56);
list.add(76);
list.add({id:1});