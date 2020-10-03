'use strict';

const io = require('socket.io')(3000);

io.on('connection', (socket)=> {
    console.log(new Date().toLocaleTimeString(), 'Connected : ', socket.id);

    socket.on('sunrise', (payload)=> {
        console.log( new Date().toLocaleTimeString(), "sunrise on server")
        io.emit('sunrise', payload);
    });

    socket.on('sunset', (payload)=> {
        console.log(new Date().toLocaleTimeString(), "sunset on server")
        io.emit('sunset', payload);
    });
});

const emergencyChannel = io.of('/emergency');
emergencyChannel.on('connection', (socket)=> {

    socket.on('join', payload=> {
        socket.join(payload);
    });


    socket.on('crime', (payload)=> {
        console.log(new Date().toLocaleTimeString(), "crime on server")
        emergencyChannel.emit('crime', payload);
    });
});

const weatherChannel = io.of('/weather');
weatherChannel.on('connection', (socket)=> {
    socket.on('snow', (payload)=> {
        console.log(new Date().toLocaleTimeString(), "snowing on server")
        weatherChannel.emit('snow', payload);
    });
});
