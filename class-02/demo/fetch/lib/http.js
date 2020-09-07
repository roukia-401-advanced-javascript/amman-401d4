'use strict';

class HTTP {

  constructor() {}

  fetch(opts) {
    if (opts) {

      let fakeResults = {
        count: 2, 
        results: [
          {name: 'puppy'},
          {name: 'black'}
        ]
      };
      
      this.render(fakeResults);
      
    }
  }

  render(data) {
    console.log(data)
  }
}

module.exports = HTTP;
