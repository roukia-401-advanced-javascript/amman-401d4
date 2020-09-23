'use strict';

const express = require('express');
const users = require('./users.js');
const basicAuth = require('./basic-auth-middleware.js');
const ouath = require('./ouath-middleware');
const bearerAuth = require('./bearer-auth-middleware');
const aclMiddleWare = require('./acl-middleware');

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

app.get('/oauth', ouath, (req, res)=> {
    res.status(200).send(req.token);
});
// only for loggedin users
app.get('/users', bearerAuth, (req, res)=> {
    // list all users 
    console.log(req.user);
   res.status(200).json(users.list());
});

// editor and admin
app.get('/user', bearerAuth, aclMiddleWare("read"), (req, res)=> {
    res.status(200).send("user get !! !!!! ")
});

// user, editor, admin
app.get('/user-submission', bearerAuth, aclMiddleWare("update"), (req, res)=> {
    res.status(200).send("user-submission !!!! ")
});

// I want this update to be available for some specific roles : editor & admin
app.put('/user', bearerAuth, aclMiddleWare("update") , (req, res)=> {
    // update the user 
    res.status(200).send("put user !!!! ")
});

// I want this update to be available admin only
app.delete('/user', bearerAuth, aclMiddleWare("delete") , (req, res)=> {
    // a token is passed with the request : in headers : Bearer token
    // the token has the username and the user role
    res.status(200).send("DELETED !!!! ")
});



app.listen(3000, ()=> {
    console.log("app running on 3000");
});
