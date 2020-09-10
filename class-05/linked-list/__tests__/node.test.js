const Node = require('../node.js');

describe('Node Module', ()=> {
    it('constructor()', ()=> {
        let value = 'Test Value';
        let node = new Node(value);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    }) 
});