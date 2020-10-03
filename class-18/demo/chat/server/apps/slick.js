// using "slick" in the URL as a namespace

module.exports = (io) => {
    const slick = io.of("/slick"); // of is only for slick namespace (url part)

    slick.on('connection', (socket)=> {
        console.log("Welcome to Slick App!!! ", socket.id);

        let currentRoom = '';
        // rooms, join and leave rooms
        socket.on('join', (room)=> {
            socket.leave(currentRoom);
            socket.join(room);
            currentRoom = room;
            console.log({currentRoom});
            // seen by anyone connected to this app.
            slick.emit('action', `Someone Joined Room : ${currentRoom}`);
    
            slick.to(`${socket.id}`).emit('joined', room);
    
            socket.on('message', (payload)=> {
                // send the message to everyone in the currentRoom
                slick.to(currentRoom).emit('message', payload);
            });
    
        });
   
    });


}