const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./src/config/dB");
const workoutroute = require("./src/routes/workoutRoute");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

const PORT = process.env.PORT || 5001;

app.use("/api/workouts", workoutroute);

const startServer = async () => {
	try {
		await connectDB();
		app.listen(PORT, () => {
			console.log(`listening to port ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
