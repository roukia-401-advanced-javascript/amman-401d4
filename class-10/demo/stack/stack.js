class Stack {
    constructor() {
        // you need to do in Linked List.
        this.storage = [];
        this.top = null;
    }

    peek() {
        if (this.isEmpty()) {
            throw new RangeError('Cannot peek an empty stack');
        }
        return this.top;
    }

    push(value) {
        // pushing to a stack adds to the top FILO (First In Last Out)
        this.storage.unshift(value); // [3,2,1]
        this.top = value; // this.storage[0]
    }

    pop() {
        if (this.isEmpty()) {
            throw new RangeError('Can not pop');
        }
        let item = this.storage.shift();
        this.top = this.storage[0];
        return item;
    }

    isEmpty() {
        return this.storage.length === 0;
    }

}


module.exports = Stack;