'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const notFoundHandler = require('../middleware/404');
const errorHandler = require('../middleware/500');

const paramsRouter = require('../routes/params');
const v1Router = require('../routes/v1');


const app = express();
// Express built in middleware
app.use(express.json());
// 3rd party middlewares
app.use(cors());
app.use(morgan('dev'));

app.use(paramsRouter);
app.use(v1Router);

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, ()=> {
            console.log(`Listening on port ${PORT}`);
        })
    }
}
