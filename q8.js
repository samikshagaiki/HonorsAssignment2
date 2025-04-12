class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    print() {
      console.log(this.items);
    }
  }
  
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.pop();
  stack.print(); // Output: [10]
  