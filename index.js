class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert the first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size += 1;
  }

  // Insert last node
  insertLast(data) {
    const node = new Node(data);
    let current;

    // if empy, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size += 1;
  }

  // Inset at index
  insertAt(data, index) {
    // if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    //  if first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current; let
      previous;

    // set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count += 1;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size += 1;
  }

  // Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count == 0) {
        console.log(current.data);
      }
      count += 1;
      current = current.next;
    }
    return null;
  }

  // remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count += 1;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size -= 1;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 1);

ll.clearList();

ll.printListData();
// ll.getAt(2)