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
    if (index < 0 || index > this.size) return null;
    if (index === this.size) return this.add(val);
    const node = new Node(val);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let prevNode = this.getNode(index - 1);
      let tmpNode = prevNode.next;
      node.next = tmpNode;
      prevNode.next = node;
    }
    this.size++;
    return node;
  }
  // Remove node from specific index
  removeAt(index) {
    if (index < 0 || index > this.size) return null;
    if (index === this.size - 1) return this.remove();
    
    let currentNode,
        nextNode,
        prevNode;
    if (index === 0) {
      currentNode = this.head;
      nextNode = currentNode.next;
      currentNode.next = null;
      this.head = nextNode;
    } else {
      prevNode = this.getNode(index - 1);
      currentNode = prevNode.next;
      prevNode.next = currentNode.next;
      currentNode.next = null;
    }
    this.size--;
    return currentNode;
  }
  // Get index for specific node
  // Not currently coded to work for objects; only primitives
  getIndex(val) {
    let currentNode = this.head;
    let cnt = 0;

    while (currentNode !== null) {
      if (currentNode.value === val) {
        return cnt;
      }
      cnt++;
      currentNode = currentNode.next;
    }
    return -1;
  }
  // Get node for specific index
  getNode(index) {
    if(index < 0 || index >= this.size) return null;
    if (index === this.size - 1) return this.tail;

    let cnt = 0,
        currentNode = this.head;
    // find node at index entered    
    while(cnt !== index){
      currentNode = currentNode.next;
      cnt++;
    }
    return currentNode;
  }
};

let list = new LinkedList();
list.add(56);
list.add(76);
list.add({id:1});