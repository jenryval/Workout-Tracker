const Workout = require("../models/userWorkout");
const router = require("express").Router();


router.get('/api/workouts', (res, res) => {
    Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err)
    })
});

router.post('/api/workouts', (req,res) => {
    Workout.create({})
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => {
        res.json(err)
    })
});



module.exports = router;