'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000');

const emergency = io.connect('http://localhost:3000/emergency');

const weather = io.connect('http://localhost:3000/weather');

socket.emit('sunrise');

emergency.emit('crime', 'there is a stolen shop!!')

weather.emit('snow');

