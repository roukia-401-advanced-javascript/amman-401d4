'use strict';

const express = require('express');
const router = express.Router();

const food = require('../models/food/food-collection');
const books = require('../models/books/books-collection');


router.get('/api/v1/:model', handleGetAllItems);
// router.post('/api/v1/:model', handleAllPost)

router.param('model', getModel);


// How will we get the right Model? 
// 
function getModel (req, res, next) {
    let model = req.params.model;
    switch(model) {
        case "food":
            req.model = food;
            next();
            break;
        case "books":
            req.model = books;
            next();
            break;
        default:
            next("Invalid Model!!! ");
            break;
    }
}

function handleGetAllItems(req, res, next) {
    console.log("req.model: ",req.model)
    req.model.get().then(results => {
        let count = results.length;
        res.json({ count,  results});
    });
}

function handleAllPost(req, res, next) {
    req.model.create(req.body).then(result=> {
        res.json(result);
    }).catch(next);
}


module.exports = router;
