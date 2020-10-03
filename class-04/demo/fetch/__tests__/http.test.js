'use strict';

const HTTP = require('../lib/http.js');
// Spies!
// we will get to know if something was called or not.
jest.spyOn(global.console, 'log');

// describe the module I am testing
describe('HTTP Module', ()=> {
    // test case
    it('fetch() does nothing with invalid options', ()=> {
        const http = new HTTP();
        http.fetch();
        expect(console.log).not.toHaveBeenCalled();
    });

    it('fetch() logs out when given options', ()=> {
        const http = new HTTP();
        http.fetch({url: 'foo'});
        expect(console.log).toHaveBeenCalled();
    });

});


