'use strict';

const events = require('./events');

events.on('save', handleSave);

function handleSave(payload) {
    console.log(`${payload.username} Record was saved !! `)
}