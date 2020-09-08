'use strict';

// connect my application to my local mongoDB using mongoose
const mongoose = require('mongoose');
const Food = require('./models/food-schema.js');

// this should be in your .env file 
const MONGOOSE_URL = 'mongodb://localhost:27017/food';

mongoose.connect(MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


    const foodOperations = async () => {

        let carrot = {
            name: 'Apple',
            calories: 15,
            type: 'FRUIT'
        };

        // Create 
        let food = new Food(carrot);
        let foodItem = await food.save();
        console.log("food Created :::::> ", foodItem);

        let oneItem = await Food.findById("5f573c577f1ae54dc4bcfc52");
        console.log(" findById >>>> ", oneItem);

        let allFoodItems = await Food.find({});
        console.log("------------------------------")
        console.log("allFoodItems : ",allFoodItems)


}
foodOperations();

// { 
//     _id: 5f573c577f1ae54dc4bcfc52,
//     name: 'Carrot',
//     calories: 10,
//     type: 'VEGETABLE',
//     __v: 0
// }

// { _id: 5f573cf2d1071c4e336a9873,
//     name: 'Carrot',
//     calories: 10,
//     type: 'VEGETABLE',
//     __v: 0 }