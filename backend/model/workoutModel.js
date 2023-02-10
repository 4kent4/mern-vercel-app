const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "please add a text value"],
		},
		reps: {
			type: Number,
			required: [true, "please add a text value"],
		},
		load: {
			type: Number,
			required: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Workout", workoutSchema);
