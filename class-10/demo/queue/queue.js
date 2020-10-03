'use strict'
class Queue {
    
    constructor() {
        this.storage = [];
    }

    enqueue(value) {
        this.storage.push(value);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new RangeError('Queue is Empty!');
        }
        return this.storage.shift();
    }

    peek() {
        if (this.isEmpty()) {
            throw new RangeError("you can't peek and Empty Queue")
        }
        return this.storage[0];
    }

    isEmpty() {
        return this.storage.length === 0;
    }
}

module.exports = Queue;
