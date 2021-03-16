const Workout = require("../models/userWorkout");
const router = require("express").Router();


router.get('/api/workouts', ({body}, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})


module.exports = router;