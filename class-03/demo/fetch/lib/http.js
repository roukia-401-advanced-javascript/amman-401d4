'use strict';

const History = require('./models/history.js');
const superagent = require('superagent');

class HTTP {

  constructor() {}

  fetch(opts) {
    if (opts) {

      superagent(opts.method, opts.url)
        // .set()
        .send(opts.body)
        .then(data=> {
          console.log("data : ",data.body);
        })
        .then(() => {
            // save to DB
            return this.save(opts);
        })
        .then(data => {
          this.render(data);
        })
        .then(()=> {
          this.fetchAll();
        });
      
    }
  }

  render(data) {
    console.log(" render result ---> ", data)
  }

  async save(options) {
    let record = new History(options);
    let saved = await record.save();
    console.log("saved : ", saved)
    return saved; 
  }

  async fetchAll() {
    let allitems = await History.find();
    console.log("allitems : ", allitems);
    return allitems;
  }

}

module.exports = HTTP;
