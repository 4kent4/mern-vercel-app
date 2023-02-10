const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log(`connected to MongoDB`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
