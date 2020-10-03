#!/usr/bin/env node

// to do http requests like httpie, postman and so on.

// ./index.js -m POST -u http://localhost:3000

'use strict';

const Input = require('./lib/input.js');
const HTTP = require('./lib/http.js');

const options = new Input();

HTTP.fetch(options);

