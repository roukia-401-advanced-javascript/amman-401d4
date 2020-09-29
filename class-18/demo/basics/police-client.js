const io = require('socket.io-client');

const emergencyChannel = io.connect('http://localhost:3000/emergency');

emergencyChannel.emit('join', 'policeDepartment');

emergencyChannel.on('crime', (payload)=> {
    console.log(new Date().toLocaleTimeString(), '911 ... What\'s your emergency');
});

