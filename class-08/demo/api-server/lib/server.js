// require express and export the app, start function.
// require the routing files
// add all global middlewares for my app.
    // for example : require cors and use them here it's a global middle

'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const foodRoutes = require('../routes/food.js');

const app = express();
// Express built in middleware
app.use(express.json());
// 3rd party middlewares
app.use(cors());
app.use(morgan('dev'));

// register routes to app, I am adding prefix of /api/v1
// food route would be : /api/v1/food
// optional can be just /
app.use('/api/v1', foodRoutes);

module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, ()=> {
            console.log(`Listening on port ${PORT}`);
        })
    }
}
