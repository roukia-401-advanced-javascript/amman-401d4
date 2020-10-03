'use strict';

const io = require('socket.io')(3000);
// Load all apps modules
require('./apps/slick.js')(io);

io.on('connection', (socket)=> {
    console.log("Welcome to My Global Connection!")
});