'use strict';

// to have some inputs from the user, 
// from the terminal

// get the user input from terminal
const inquirer = require('inquirer');

const net = require('net');

const host =  process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const client = new net.Socket();
let name; 

client.connect(port, host, ()=> {
    console.log("Chat is connected to Server! ..")
});

client.on('data', function(data) {
    let event = JSON.parse(data);
});

function sendMessageToServer(text, name) {
    let event = JSON.stringify({message: `[${name}]: ${text}` });
    client.write(event);
}

async function getUserInput() {
    let input = await inquirer.prompt([{name: 'text', message: ''}]);
    // send it on the socket connection
    console.log("input ------>>>> : ",input);
    sendMessageToServer(input.text, name);
    getUserInput();
}

async function getUserName() {
    let input = await inquirer.prompt([{name: 'name', message: 'What is your Name?'}]);
    name = input.name;
}

getUserName();
getUserInput();


