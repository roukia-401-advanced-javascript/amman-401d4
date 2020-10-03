'use strict';

const schema = require('./books-schema');
const MongoModel = require('../mongo-model');

class Books extends MongoModel {

}

module.exports = new Books(schema);