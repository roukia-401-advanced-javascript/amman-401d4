'use strict';

const events = require('events');

const newEvents = new events();

// Register some listeners on some events
newEvents.on('delete', payload => {
    console.log("second listener on the delete event : ", payload);
});

newEvents.on('delete', handleDelete);

newEvents.on('save', payload => {
    console.log("save operation: ", payload);
});


// Emit the events (shout out to the world!!!)
newEvents.emit('delete', {id: 123});
newEvents.emit('save', {name: 'Test', language: 'en'});


function handleDelete(paypload) {
    console.log("delete operation: ", payload);
}
