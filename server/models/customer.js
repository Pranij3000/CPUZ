import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const customerSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "First Name is required"],
		trim: true,
	},
	lastName: {
		type: String,
		required: [true, "Last Name is required"],
		trim: true,
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: true,
		trim: true,
		lowercase: true,
		match: [/\S+@\S+\.\S+/, "Invalid email format"],
	},
	password: {
		type: String,
		required: [true, "Password is required"],
		minlength: [6, "Password must be at least 6 characters"],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

customerSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		return next();
	}
	this.password = await bcrypt.hash(this.password, 10);
	next();
});

// Create a custom method to match the password for authentication
customerSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

const Customer = mongoose.model("Customer", customerSchema);
export default Customer;
