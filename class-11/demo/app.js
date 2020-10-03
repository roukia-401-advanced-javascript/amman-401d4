'use strict';

const express = require('express');
const users = require('./users.js');
const basicAuth = require('./basic-auth-middleware.js');

const app = express();

app.use(express.json());

app.post('/signup', (req, res)=> {
    users.save(req.body).then(user => {
        // return token
        let token = users.generateToken(user);
        res.status(200).send(token);
    
    }).catch(e => res.status(403).send("error !!"));
});

app.post('/signin', basicAuth, (req, res)=> {
   res.status(200).send(req.token);
});

app.get('/users', (req, res)=> {
    // list all users 
   res.status(200).json(users.list());
});

app.listen(3000, ()=> {
    console.log("app running on 3000");
});
