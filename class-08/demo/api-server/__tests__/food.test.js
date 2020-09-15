'use strict';

require('@code-fellows/supergoose');

const food = require('../models/food-collection');

describe ('Food Model', ()=> {
    it('it can create()', async ()=> {
        const foodObj = {name: 'apple', calories : 70, type: 'FRUIT'};
        const result = await food.create(foodObj);
        Object.keys(foodObj).forEach(key=> {
            expect(result[key]).toEqual(foodObj[key]);
        });
    });

    it('it can get()', async ()=> {
        const foodObj = {name: 'banana', calories : 90, type: 'FRUIT'};
        const result = await food.create(foodObj);
        const records = await food.get(result._id); // []
        console.log("records >>>> ", records)
        Object.keys(foodObj).forEach(key=> {
            expect(records[0][key]).toEqual(foodObj[key]);
        });
    });

    // add update and delete tests
    
});