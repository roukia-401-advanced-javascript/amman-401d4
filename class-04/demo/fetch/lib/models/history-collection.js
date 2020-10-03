'use strict';

const schema = require('./history.js');

class History {

    constructor() {
    }

    get(_id) {
        // if I have a specific ID get that one onlly
        // else find all records
        if (_id) {
            return schema.findOne({_id});
        } else {
            return schema.find();
        }
    }

    create(record) {
        let newRecord = new schema(record);
        return newRecord.save();
    }

    delete(_id) {
        return schema.findByIdAndDelete(_id);
    }
   
    update(_id, record) {
        return schema.findByIdAndUpdate(_id, record);
    }
    
    updateWithNew(_id, record) {
        return schema.findByIdAndUpdate(_id, record, {new: true});
    }
}

// Singleton
// exports an instance instead of the class, 
// this instance will be shared]
module.exports = new History();