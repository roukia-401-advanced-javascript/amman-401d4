'use strict';

// const events = require('./events');

require('./logger');

require('./dashboard');
// registration of the listeners

// send the event 
events.emit('save', {username: 'Test 123', lan: 'ar'});
