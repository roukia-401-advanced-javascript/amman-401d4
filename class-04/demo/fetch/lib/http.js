'use strict';

const history = require('./models/history-collection.js');
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
    let record = await history.create(options);
    return record; 
  }

  async fetchAll() {
    let allitems = await history.get();
    console.log("allitems : ", allitems);
    return allitems;
  }

}

module.exports = HTTP;
