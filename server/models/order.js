import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
	{
		customer: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Customer",
			required: true,
		},
		customerName: {
			type: String,
			required: true,
		},
		components: [
			{
				componentType: {
					type: String,
					required: true,
				},
				name: {
					type: String,
					required: true,
				},
				price: {
					type: Number,
					required: true,
				},
				imageURL: {
					type: String,
				},
			},
		],
		totalAmount: {
			type: Number,
			required: true,
		},
		status: {
			type: String,
			enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
			default: "pending",
		},
		orderDate: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true },
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
