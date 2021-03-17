const Workout = require("../models/userWorkout");
const router = require("express").Router();
// const db = require('')

// GET last workout
router.get('/api/workouts', (req, res) => {
    Workout.find(req)
    .then(workouts => {
        res.json(workouts)
    })
    .catch(err => {
        res.status(400).json(err)
    })
});


// GET workouuts in range
router.get('/api/workouts/range', (req, res) => {
    Workout.aggragate([
        {
            $addFields: {
                totalDuration: {$sum: "$duration"}
            }
        }
    ])
    .then(workouts => {
        res.json(workouts)
    })
    .catch(err => {
        res.status(400).json(err)
    })
});


// PUT add exercise
router.put('/api/wokouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(
        params.if,
        {$push: {exercises:body} },

        {new: true, runValidators: true}
    ).then(workouts => {
        res.json(workouts);
    }).catch(err => {
        res.json(err)
    })
});


// POST create workout
router.post('/api/workouts', (req , res) => {
    Workout.create({})
    .then(workouts => res.json(workouts))
    .catch(err => {
        res.json(err)
    })
});

module.exports = router;
