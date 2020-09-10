'use strict';

let LL = require('../linkedlist.js');

describe('Linked List Module', ()=> {
    
    it('constructor()', ()=> {
        let list = new LL();
        expect(list.head).toBeNull();
    });

    it('append()', ()=> {
        let list = new LL();
        let initialValue = 'First One';
        list.append(initialValue);
        expect(list.head.value).toEqual(initialValue);

        let newValue = 'Second Value';
        list.append(newValue);
        expect(list.head.value).toEqual(initialValue);
        expect(list.head.next).not.toBeNull();
        expect(list.head.next.value).toEqual(newValue);
       
        console.log("list -----> ", list);
    });


})