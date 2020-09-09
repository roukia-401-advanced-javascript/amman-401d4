// require the schema and add food CRUD operations

'use strict';

const schema = require('./food-schema.js');

class Food {

    constructor() {
    }

    create(record) {
        let newRecord = new schema(record);
        return newRecord.save();
    }

    get(_id) {
        if (_id) {
            return schema.findOne({_id});
            // return schema.findById(_id);
        } else {
            // return schema.find({});
            return schema.find();
        }
    }

    update(_id, record) {
        // return schema.findByIdAndUpdate(_id, record);
        return schema.findOneAndUpdate({_id: _id}, record );
    }

    delete(_id) {
        return schema.findByIdAndDelete(_id);
    }

    remove(_id) {
        return schema.findByIdAndRemove(_id);
    }
}

module.exports = Food;