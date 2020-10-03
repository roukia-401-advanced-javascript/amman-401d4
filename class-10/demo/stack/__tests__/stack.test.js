'use strict';

const Stack = require('../stack.js');

// create a stack: constructor 
// to be able to push 
// to be able to pop
// to be able to take a peek
// check if it's empty

describe('Stack Module', ()=>{
    it('creates a stack instance', ()=> {
        let stack = new Stack();
        expect(stack instanceof Stack).toBeTruthy();
    });
    
    it('add a value to the top of the stack', ()=> {
        let stack = new Stack();
        stack.push(1);
        expect(stack.top).toEqual(1);
        stack.push(2);
        expect(stack.top).toEqual(2);
    });

    it('can pop the last item', ()=> {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toEqual(3);
        expect(stack.peek()).toEqual(2);
        expect(stack.pop()).toEqual(2);
        expect(stack.peek()).toEqual(1);
    });

    it('does not allow pop from an empty stack', ()=> {
        let stack = new Stack();
        // keep an eye on this test
        expect(()=> stack.pop()).toThrow(RangeError);
        expect(()=> stack.pop()).toThrow('Can not pop');
    });

    it('peeks on the last item', ()=> {
        let stack = new Stack();
        stack.push(1);
        expect(stack.peek()).toEqual(1);
    });

    it('should not peek an empty stack', ()=> {
        let stack = new Stack();
        expect(()=> stack.peek()).toThrow(RangeError);
        expect(()=> stack.peek()).toThrow('Cannot peek an empty stack');
    });

    it('check if the stack isEmpty', ()=> {
        let stack = new Stack();
        expect(stack.isEmpty()).toBeTruthy();
    });

    it('should if the stack is not empty', ()=> {
        let stack = new Stack();
        stack.push(1);
        expect(stack.isEmpty()).toBeFalsy();
    });

});


