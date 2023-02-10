const express = require("express");

const {
	getAllWorkouts,
	getWorkout,
	postWorkout,
	deleteWorkout,
	updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//Get all workouts
router.get("/", getAllWorkouts);

//Get a single workout
router.get("/:id", getWorkout);

//Post a workout
router.post("/", postWorkout);

//Delete a workout
router.delete("/:id", deleteWorkout);

//Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
