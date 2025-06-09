import mongoose from "mongoose";

const db = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		if (conn) console.log("Connected to the database");
	} catch (err) {
		console.log(`Error connecting to mongodb: ${err}`);
		process.exit(1);
	}
};

export default db;
