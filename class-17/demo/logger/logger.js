'use strict';

const net = require('net');

const client = new net.Socket(); // create a socket connection 
// connect it to server.js : localhost port: 4000;

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

client.connect(port, host, ()=> {
    console.log("connecting ... ")
});

client.on('data', (data)=> {
    let jsonData = JSON.parse(data);
    console.log(new Date(), jsonData.message);
});

client.on('close', function () {
    console.log("connection is closed!!");
});

const msg = JSON.stringify({message: 'Hello from Logger!!'});
client.write(msg);