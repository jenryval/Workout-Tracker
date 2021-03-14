const mongoose = require('mongoose')

const schema = mongoose.schema

const day = new Schema({
    dayCreated: {
        type: Date,
        default: Date.now
    }
});

const day = mongoose.model('day', day)

module.exports = day;