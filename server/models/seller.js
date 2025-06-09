import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
		},
		phoneNumber: {
			type: String,
			required: true,
			trim: true,
		},
		locations: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{ timestamps: true },
);

const Seller = mongoose.model("Seller", sellerSchema);

export default Seller;
