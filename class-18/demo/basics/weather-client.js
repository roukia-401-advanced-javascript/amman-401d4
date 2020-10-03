const io = require('socket.io-client');

const weatherChannel = io.connect('http://localhost:3000/weather');

weatherChannel.on('snow', (payload)=> {
    console.log(new Date().toLocaleTimeString(), 'Snowing ....');
});
