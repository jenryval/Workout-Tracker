const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Exercises = new Schema({
    type: {
        type: String,
        trim: true,
        required: [true, 'Enter the type of workout']
   },
    name: {
        type: String,
        trim: true,
        required: [true, 'Enter the name of the workout']
    },
    duration: {
        type: Number,
        trim: true,
        required: [true, 'Enter the duration of the workout']
    },
    weight: {
        type: Number,
        trim: true
    },
    reps: {
        type: Number,
        trim: true
    },
    sets: {
        type: Number,
        trim: true
    },
    distance: {
        type: Number,
        trim: true,
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