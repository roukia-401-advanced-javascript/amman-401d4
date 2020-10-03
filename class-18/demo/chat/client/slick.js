const inquirer = require('inquirer');

const io = require('socket.io-client');

const slick = io.connect('http://localhost:3000/slick');

slick.on('connect', ()=> {
    let messages = [];
    let name = '';
    let channel = 'general';
    let activeInput = false;

    slick.emit('join', channel);

    slick.on('joined', (joinChannel)=> {
        console.log("on Joined!!! joinChannel:  ",joinChannel)
        channel = joinChannel;
    });

    slick.on('message', (payload)=> {
        console.clear();
        messages.push(payload);
        messages.forEach((message)=> console.log(message));
        console.log('');
        getInput();

    })

    async function getInput() {
        if (activeInput) {
            return
        }
        activeInput = true;
        const response = await inquirer.prompt([{
            name: 'text',
            message: `------------- \n ${channel}`
        }]);

        console.log(" response: ",response)
        // join room1
        const command = response.text.toLowerCase().split(' ')[0];
        switch(command) {
            case 'quit':
                process.exit();
            case 'join':
                activeInput = false;
                const room = response.text.toLowerCase().split(' ')[1];
                slick.emit('join', room);
                channel = room;
                getInput();
                break;
            default: 
                activeInput = false;
                console.log("emitting msg ..", response.text);
                slick.emit('message', `[${name}]: ${response.text}` );
                getInput();
                break;
        }
        
    }

    async function getName() {
        console.clear();
        const input = await inquirer.prompt([{
            name: 'name', message: 'What is your name? '
        }]);
        name = input.name;
        activeInput = false;
        getInput();
    }

    getName();

});
