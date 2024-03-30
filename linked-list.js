/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    this.tail.next = newNode;
    newNode.prev = this.tail;

    this.tail = newNode;
    this.length += this.length
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;

    this.length += this.length
  }

  /** pop(): return & remove last item. */

  pop() {
    const last = this.tail;
    this.tail = LinkedList.vals[length - 1]

    this.tail.next = null;
    last.prev = null;
    this.length -= this.length;
    return last;
  }

  /** shift(): return & remove first item. */

  shift() {
    const first = this.head;
    this.head = LinkedList.vals[1];

    this.head.prev = null;
    first.next = null;
    this.length -= this.length;
    return first;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let val = LinkedList.vals[idx];
    return val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    LinkedList.vals[idx] = val;
    // LinkedList.vals[idx - 1].next = LinkedList.vals[idx];
    // LinkedList.vals[idx + 1].prev = LinkedList.vals[idx];
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);
    newNode.next = LinkedList.vals[idx];
    LinkedList.vals[idx].prev = newNode;

    if (idx !== 0) {
      LinkedList.vals[idx - 1] = newNode;
    } else {
      this.unshift(val);
    }
    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    const goner = LinkedList.vals[idx];
    LinkedList.vals[idx - 1].next = LinkedList.vals[idx + 1];
    LinkedList.vals[idx + 1].prev = LinkedList.vals[idx - 1];
    this.length -= 1;
    return goner;
  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0;
    for (val of LinkedList.vals) {
      total += val;
      val = val.next;
    }
    return (total / this.length);
  }
}

module.exports = LinkedList;
