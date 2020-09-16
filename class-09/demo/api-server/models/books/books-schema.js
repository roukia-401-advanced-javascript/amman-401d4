'use strict';

const mongoose = require('mongoose');

const books = mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    publisher: {type: String, required: true},
    description: {type: String}
});


module.exports = mongoose.model('books', books);