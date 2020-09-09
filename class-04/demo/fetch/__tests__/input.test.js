'use strict';

jest.mock('minimist');
const minimist = require('minimist');
minimist.mockImplementation(()=> {
    return {
        u: 'http://google.com',
        m: 'post',
        b: 'testBody'
    }
});

const Input = require('../lib/input.js');

describe('Input Module', () => {

    it('getMethod() will default to GET when method has no value', ()=> {
        let options = new Input();
        expect(options.getMethod()).toEqual('GET');
    });

    it('getMethod() will have valid methods when specified', ()=> {
        let options = new Input();
        expect(options.getMethod('get')).toEqual('get');
        expect(options.getMethod('post')).toEqual('post');
        expect(options.getMethod('put')).toEqual('put');
        expect(options.getMethod('delete')).toEqual('delete');
        expect(options.getMethod('patch')).toEqual('patch');
    });

    it('Valid() respects proper object', ()=> {
        let options = new Input();
        expect(options.valid()).toBeTruthy();
    });

    it('getUrl() returns my url if valid', ()=> {
        let options = new Input();
        let url = 'http://foo.com';
        expect(options.getURL(url)).toBeTruthy();
    });
    
});



