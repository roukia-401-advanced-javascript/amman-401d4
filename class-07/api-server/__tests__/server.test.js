const { server }  = require('../lib/server.js');

const supertest = require('supertest');
const mockRequest = supertest(server);


describe('web server', ()=> {

    it('should respond with 404 for not found routes', ()=>{
        return mockRequest.get('/dog').then(result=>{
            expect(result.status).toBe(404);
        }).catch(err=> {
            console.log(err);
        });
    });

    it('should respond with 200 for good routes', ()=>{
        return mockRequest.get('/fruit').then(result=>{
            console.log("result >>> ",result);
            expect(result.status).toBe(200);
        }).catch(err=> {
            console.log(err);
        });
    });


    it('should respond with 500 for bad routes', ()=>{
        return mockRequest.get('/bad').then(result=>{
            expect(result.status).toBe(500);
        }).catch(err=> {
            console.log(err);
        });
    });


});