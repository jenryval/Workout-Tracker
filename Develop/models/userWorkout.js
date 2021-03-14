const mongoose = require('mongoose')

const schema = mongoose.schema

const exercises = new Schema({
    type: {
        type: String,
        trim: true,
        required: "type is required"
   },
    name: {
        type: String,
        trim: true,
        required: "type is required"
    },
    duration: {
        type: Number,
        trim: true,
        required: "number is required"
    },
    weight: {
        type: Number,
        trim: true,
        required: "type is required"
    },
    reps: {
        type: Number,
        trim: true,
        required: "type is required"
    },
    sets: {
        type: Number,
        trim: true,
        required: "type is required"
    },
})