class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    peek() {
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    print() {
      console.log(this.items);
    }
  }
  
  const q = new Queue();
  q.enqueue("A");
  q.enqueue("B");
  q.dequeue();
  q.print(); // Output: [ 'B' ]
  