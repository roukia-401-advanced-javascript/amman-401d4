'use strict';

// connect my application to my local mongoDB using mongoose
const mongoose = require('mongoose');
const Food = require('./models/food-collection.js');
const food = new Food();

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
        let newFood = await food.create(carrot);
        console.log("newFood created >>>>>> ",newFood);

        let oneItem = await food.get(newFood._id);
        console.log(" findById >>>> ", oneItem);

        let allFoodItems = await food.get();
        console.log("------------------------------")
        console.log("allFoodItems : ",allFoodItems)
        let deleted = await food.delete("5f588ea8ff8e8771bf8ea780");
        console.log("deleted >>>>>>>>> ",deleted);
        let notFound = await food.get("5f588ea8ff8e8771bf8ea780");
        console.log("notFound : ",notFound)

        let removedFood = await food.remove(newFood._id);
        console.log("removedFood : ",removedFood);
        console.log(await food.get(newFood._id));
        // mongoose.disconnect();

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