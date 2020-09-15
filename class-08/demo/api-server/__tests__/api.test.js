const { server } = require('../lib/server');

const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Food API', ()=> {
    it('can post() a food item', async ()=> {
        const foodObj = {name: 'apple', calories : 70, type: 'FRUIT'};
        const data = await mockRequest.post('/api/v1/food').send(foodObj);
        console.log("data.body : ",data.body);
        const record = data.body;
        Object.keys(foodObj).forEach(key=> {
            expect(record[key]).toEqual(foodObj[key]);
        });
    });

    it('can get() a food item', async ()=> {
        const foodObj = {name: 'apple', calories : 70, type: 'FRUIT'};
        const data = await mockRequest.post('/api/v1/food').send(foodObj);
        console.log("data.body : ",data.body);
        const record = data.body;
        const foodItemResponse = await mockRequest.get(`/api/v1/food/${record._id}`);
        const foodItem = foodItemResponse.body[0];
        Object.keys(foodObj).forEach(key=> {
            expect(foodItem[key]).toEqual(foodObj[key]);
        });

    });
});


