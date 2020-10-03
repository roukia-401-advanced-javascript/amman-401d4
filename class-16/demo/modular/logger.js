'use strict';

// add some event listeners 
const events = require('./events');

events.on('save', payload=> log('save', payload));
events.on('non-existing-event', payload=> log('non-existing-event', payload));
events.on('delete', payload=> log('delete', payload));

function log(event, payload) {
    let time = new Date();
    console.log('EVENT LOG ', {time, event, payload})
}