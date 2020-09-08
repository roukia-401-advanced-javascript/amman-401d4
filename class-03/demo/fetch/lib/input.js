'use strict';

const isUrl = require('is-url'); // validate if it's a url
const minimist = require('minimist');


class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.method = this.getMethod(args.m);
    this.url = this.getURL(args.u);
    this.body = this.getBody(args.b);
    this.headers = this.getHeaders(args.h);
  }

  getMethod(method = '') {
    let validMethods = /get|put|patch|post|delete/i;
    return validMethods.test(method) ? method : 'GET';
  }

  getURL(url = '') {
    return isUrl(url) ? url : undefined;
  }

  // -b
  getBody(body = undefined) {
    try {
      return JSON.parse(body);
    } catch(e) {
      return body;
    }
  }
  
  getHeaders() {

  }

  valid() {
    console.log("this.url : ",this.url);
    console.log(" this.method : ", this.method)
    return this.url && this.method;
  }

}


module.exports = Input;
