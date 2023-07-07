'use strict';

/*
                23
           21        30
       10         25      36
   8       15   
       12      17  
*/

class Node {
  constructor(val) {
      this.value = val;
      this.left = null;
      this.right = null;
  }
};

class BinarySearchTree {
  constructor() {
      this.root = null;
  }

  add(val) {
      const newNode = new Node(val);
      if (this.root === null) {
        this.root = newNode;
        return this;
      }
      let node = this.root;
      while(true) {
        if (val === node.value) return this;
        if (val < node.value) {
          if (node.left === null) {
            node.left = newNode;
            return this;
          }
          node = node.left;
        } else {
          if (node.right === null) {
            node.right = newNode;
            return this;
          }
          node = node.right;
        }
      }
  };

  get(val) {
      if (this.root === null) return null;
      let node = this.root,
          found = false;
      while(node && !found) {
        if (val < node.value) {
          node = node.left;
        } else if (val > node.value) {
          node = node.right;
        } else {
          found = true;
        }
      }
      if (!found) return null;
      return node;
  };

  contains(val) {
      
  };
};

const tree = new BinarySearchTree();