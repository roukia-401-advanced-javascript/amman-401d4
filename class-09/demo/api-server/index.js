// run ther server and connect to DB

const mongoose = require('mongoose');
const server = require('./lib/server');

// connection details should be .env file
const MONGOOSE_URL = 'mongodb://localhost:27017/new-db';

const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}

mongoose.connect(MONGOOSE_URL, mongooseOptions);

server.start(4000);
