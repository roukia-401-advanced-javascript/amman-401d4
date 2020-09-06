'use strict';

// Bring in some 3rd party libraries to help us out


const isUrl = require('is-url'); // validate if it's a url

const minimist = require('minimist');

function Input() {

  console.log("process.argv : ", process.argv);
  
  // Get the -x style of arguments from the user
  const args = minimist(process.argv.slice(2));
  console.log(" args minimist >>>>> ", args)
  // Use the args to create our properties with helper methods
  
  this.method = this.getMethod(args.m);
  this.url = this.getURL(args.u);
}

Input.prototype.getMethod = function (method = '') {
  let validMethods = /get|put|patch|post|delete/i;
  return validMethods.test(method) ? method : 'GET';
};

Input.prototype.getURL = function (url = '') {
  return isUrl(url) ? url : undefined;
};

module.exports = Input;
