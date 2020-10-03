#!/usr/bin/env node

// to do http requests like httpie, postman and so on.

// ./index.js -m POST -u http://localhost:3000 -b jsonObject -h headers

'use strict';

const Input = require('./lib/input.js');
const HTTP = require('./lib/http.js');

const http = new HTTP();
const options = new Input();

options.valid() ? http.fetch(options) : help();

function help() {
    console.log(`
        api usage: api -m <method> -u <url> -b <body> -h <headers>

        -m HTTP method (get/post/put/delete/patch)
        -u URL 
        -b Body with post/put/patch
            enclosed with single quotes 
            JSON must be valid
        -h Headers
    `);
}

