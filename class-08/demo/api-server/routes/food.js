'use strict';

const express = require('express');
const food = require('../models/food-collection.js');
const router = express.Router();

router.get('/food', getFood);

router.get('/food/:id', getFood);

router.post('/food', postFood);

function getFood(req, res, next) {
    const id = req.params.id;
    food.get(id).then(data => {
        res.status(200).json(data);
    }).catch(next);
}

function postFood(req, res, next) {
    console.log("req.body >>> ",req.body)
    food.create(req.body).then(data=>{
        res.status(201).json(data);
    }).catch(err=> {
        // or do .catch(next) like the getFood function
        console.log(err);
        next(err);
    });
}

module.exports = router;