import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  components: [
    {
      partId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Part",
        required: true,
      },
      componentType: {
        type: String,
        required: true,
        enum: ["CPU", "Motherboard", "Memory", "Storage", "GPU", "Cooling", "Power Supply", "Case", "Monitor"],
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
        min: [1, "Quantity must be at least 1"],
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
    min: [0, "Total price cannot be negative"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

orderSchema.index({ customerId: 1 });
orderSchema.index({ "components.partId": 1 });

export default mongoose.model("Order", orderSchema);
