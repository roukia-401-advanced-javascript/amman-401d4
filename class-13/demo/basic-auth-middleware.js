'use strict';

const base64 = require('base-64');
const users = require('./users.js');

module.exports = (req, res, next) => {
    // pass the username and password to this method;
    // Basic Authentication (HTTP Headers)
    // we expect to have req headers 
    // Basic YWhtYWRfc2hlbGEgOjEyMzQ=
    if (!req.headers.authorization) {
        return next('Invalid Login!!');
    }
    const auth = req.headers.authorization.split(' ');
    if(auth[0] == 'Basic') {
        //take the auth[1]: YWhtYWRfc2hlbGEgOjEyMzQ=
        // after decode ahmad_shela:1234
        // 1st decode auth[1] -> then split it on :
        const [username, password] = base64.decode(auth[1]).split(':'); 
        users.authenticateBasic(username, password).then(validUser=>{
            // we have the user obj
            // generate a token for this user and return
            let token = users.generateToken(validUser);
            req.token = token;
            next();
            
        }).catch(err=> next(err));
    } else {
        next('Invalid Login!! ');
    }
}