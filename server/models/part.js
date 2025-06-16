import mongoose from "mongoose";

const partSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  brand: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  componentType: {
    type: String,
    required: true,
    enum: ["CPU", "Motherboard", "Memory", "Storage", "GPU", "Cooling", "Power Supply", "Case", "Monitor"],
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price cannot be negative"],
  },
  description: {
    type: String,
    trim: true,
  },
  specifications: {
    type: mongoose.Schema.Types.Mixed, // Flexible object for different component specs
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  stockQuantity: {
    type: Number,
    default: 0,
    min: [0, "Stock quantity cannot be negative"],
  },
  imageUrl: {
    type: String,
    trim: true,
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt field before saving
partSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

// Indexes for better query performance
partSchema.index({ componentType: 1 });
partSchema.index({ sellerId: 1 });
partSchema.index({ name: "text", brand: "text", model: "text" });
partSchema.index({ price: 1 });
partSchema.index({ inStock: 1 });

export default mongoose.model("Part", partSchema);
