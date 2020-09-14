'use strict';

const express = require('express');
const app = express();

const logger = require('./logger.js');

// Global MiddleWare : app.use on the level of my application
app.use(express.json());
app.use(logger);

// route middleware
// we can add as many route middlewares as we want
app.get('/fruit', getBrowser, square(5), (req, res)=> {
    console.log("req.browser ----> ", req.browser);
    console.log("req.number ----> ", req.number);
    res.status(200).send('Banana');
});

app.get('/cat1',  response);

app.get('/cat2', (req, res)=> {
    console.log("req.number ----> ", req.number);
    res.status(200).send('Meow2');
});

function response(req,res) {
    res.status(200).send('Meow');
}

app.get('/cat', square(5) , (req,res) => {
    console.log("req.browser --->>>> ", req.browser)
    console.log("req.number ----> ", req.number);
    res.status(200).send('Meow');
});

app.get('/bad', (req, res)=> {
    throw new Error("bad Request .... ");
});

// 404 page not found
app.use('*', notFoundHandler);
app.use(errorHandler);

// GLobal Middleware on the level of my app
function notFoundHandler(req, res, next) {
    res.status(404).send('404 Not Found');
}

function getBrowser(req, res, next) {  
   req.browser =  req.headers['user-agent']; // info about my browser
   next();
}

// curried route middleware 
function square(n) {
    return (req, res, next) => {

        if (typeof n !== "number") {
            throw new Error("custom error !!! ")
            // next("not a number !!!!");
        } else {
            req.number = n * n ;
            next();
        }
    }
}

// we have to have 4 arguments for the error Handler
function errorHandler(req, req, res, next) {
    console.log("asdasdsad ::::::: errorHandler")
    res.status(500);
    res.json({ error: err });
  }


module.exports = {
    server: app, 
    start: port => {
        let PORT = port || process.env.port || 3000;
        app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))
    }
};