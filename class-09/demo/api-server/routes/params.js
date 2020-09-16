'use strict';

/* this file is to understand the idea of route param middleware */

const express = require('express');
const router = express.Router();

// This will not trigger getZip
router.get('/places/gaza', (req, res)=> {
    console.log(`Zip: ${req.body.zip}`);
    res.status(200).send('this is Gaza route !! ');
});

// This will trigger getZip
router.get('/places/:city' ,  (req, res)=> {
    console.log(`Zip from Places: ${req.body.zip}`);
    res.status(200).send(`this is ${req.params.city}`);
});

// This will trigger getZip
router.get('/animals/:city',  (req, res)=> {
    console.log(`Zip from Animals Route: ${req.body.zip}`);
    res.status(200).send(`this is animals route for ${req.params.city}`);
});


// router middleware that will be triggered based on the route param
router.param('city', getZip);


// like a middleware
function getZip(req, res, next) {
    req.body.zip = Math.floor(Math.random() * 10000).toString().padStart(5, 0);
    next();
}

module.exports = router;

