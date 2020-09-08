'use strict';

const mongoose = require('mongoose');

const history = mongoose.Schema({
    url : {type: String, required: true},
    method: { type: String, default: 'GET', uppercase: true, enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']},
    body: { type: String },
    headers: { type: String }
});

module.exports = mongoose.model('history', history);