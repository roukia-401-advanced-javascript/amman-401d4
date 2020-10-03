'use strict';

const net = require('net');

const server = net.createServer();
// run the server 

const port = process.env.PORT || 4000;

server.listen(port, ()=> console.log(`server is running on ${port}`));


let socketPool = {};
// add some event listeners : on connection 
// when clients connect to us trigger a callback
server.on('connection', (socket)=> {
    console.log("user is online!!!");
    // a specific connection; the connection with the logger 
    // I want to be able to listen on that connection
    // {
    //     socket-connection-1: socket 
    //     socket-connection-2: socket
    // }
    const id = `Socket-${Math.random()}`;
    console.log("id >>>>>>> ", id)
   
    socketPool[id] = socket;

    socket.on('data', buffer => {
        // encoded buffer
        console.log("buffer >>>> ",buffer);
        // parse buffer
        let msg = JSON.parse(buffer.toString());
        console.log("msg >>> ", msg); 
        broadcast(msg);
    });

    server.on('error', (e)=> {
        console.log("ERROR !!!!!!! ", e)
    })

    server.on('close', ()=> {
        delete socketPool[id];
    })
});

function broadcast(msg) {
    console.log(" -------------- 1");
    let payload = JSON.stringify(msg);
    console.log(" -------------- 2", payload)
    for (let id in socketPool) {
        console.log(" ---------LOOPING-----***** ", id )
        socketPool[id].write(payload);
    }
    console.log(" -------------- 3")
}