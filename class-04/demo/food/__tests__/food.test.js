'use strict';

const { collection } = require("../models/food-schema");

// try it with mongoose package and see ow the test data will be inserted 
require('@code-fellows/supergoose');

const Food = require('../models/food-collection');
const food = new Food();

describe('Food Model', () => {
    it('can create a new food item', () => {
        let obj = { name: 'test food 1', calories: 20 , type: 'FRUIT'};
        food.create(obj).then(record => {
            Object.keys(obj).forEach(key => {
                expect(record[key]).toEqual(obj[key]);
            });
        });
    });

    // it('can get() a food item', ()=> {
    //     let obj = { name: 'test food 2', calories: 50 , type: 'FRUIT'};
    //     return  food.create(obj).then(record => {
    //         console.log("obj : ",obj)
    //         return food.get(record._id)
    //             .then(foodItem => {
    //                 console.log("foodItem : ",foodItem)
    //                 Object.keys(obj).forEach(key => {
    //                     expect(foodItem[key]).toEqual(obj[key]);
    //                 });
    //             });
    //     });
    // })

    it('can get() a food item', async ()=> {
        let obj = { name: 'test food 2', calories: 50 , type: 'FRUIT'};
        const record = await food.create(obj);
        console.log("record : ",record)
        const foodItem = await food.get(record._id);
        console.log("foodItem : ",foodItem)
        Object.keys(obj).forEach(key => {
            expect(foodItem[key]).toEqual(obj[key]);
        });
    });
    
});


