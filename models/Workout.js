const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Exercises = new Schema({
    type: {
        type: String,
        trim: true,
        required: 'Enter the type of workout'
   },
    name: {
        type: String,
        trim: true,
        required: 'Enter the name of the workout'
    },
    duration: {
        type: Number,
        required: 'Enter the name of the workout'
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    distance: {
        type: Number,
    }
})

const workoutschema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [Exercises]
});


const Workout = mongoose.model('Workout', workoutschema)

module.exports = Workout