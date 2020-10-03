'use strict';

// create a schema for my food
// I will use mongoose.Schema()

const mongoose = require('mongoose');

// it will be like one object that has objects, 
//each one of these objects will have properties:
    // for example: type, required

const food = mongoose.Schema({
    name: { type: String, required: true },
    calories: {type: Number, required: true },
    type: { type: String, uppercase: true, enum: ['FRUIT', 'VEGETABLE', 'SNACK', 'BREAD', 'MEAT'] }
});

// create a model and expose it 
module.exports = mongoose.model('food', food);
