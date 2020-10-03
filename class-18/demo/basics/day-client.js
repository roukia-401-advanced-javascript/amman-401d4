const io = require('socket.io-client');

// connects to the main not to a specific room
const socket = io.connect('http://localhost:3000');

socket.on('sunrise', (payload)=> {
    console.log(new Date().toLocaleTimeString(), 'Rise and Shine!!!');
});

socket.on('sunset', (payload)=> {
    console.log(new Date().toLocaleTimeString(), 'Go to sleep :DDD !!!');
});
