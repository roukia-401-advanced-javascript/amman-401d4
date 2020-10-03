'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = 'mytokensecret';

let db = {
    /*  'Ahmad  Shela': {
            username: 'Ahmad Shela',
            password: 'hashed Password of Ahmad Shela',
     } */

};

let users = {};

users.save = async function(record) {
    // Registration 

    //adding users ot my object
    // {username : username, password: password}
    // if my db has this record.username 
   
    if (!db[record.username]) {
        // save user if it does not exist
        try {
            record.password = await bcrypt.hash(record.password, 5);
        } catch(e) {
            console.log("error in bcrypt: ", e)
        }
        db[record.username] = record;
        return record;
    }
    return Promise.reject();
};

users.authenticateBasic = async function(user, password) {
    // Signin
    //headers Basic : username and password
    // compare the password with the DB hashed password
    //return the user object
    if (db[user]) {
        let valid = await bcrypt.compare(password, db[user].password);
        let returnValue =  valid ? db[user] : Promise.reject();
        return returnValue
    }
    return Promise.reject();
   
};

users.generateToken = function(user) {
    //jwt to genrate a token for us.
    // install jwt and generate a token with it and return it.
    let token = jwt.sign({username: user.username}, SECRET);
    return token;
};

users.list = ()=> db;

module.exports = users;