'use strict';


const schema = require('./food-schema.js');

const MongoModel = require('../mongo-model.js');

class Food extends MongoModel {
    
}

module.exports = new Food(schema);