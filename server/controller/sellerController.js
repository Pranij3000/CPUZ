import Seller from "../models/seller.js";

export async function registerSeller(req, res) {
  try {
    const { firstName, lastName, email, phoneNumber, locations } = req.body;

    // Basic input validation
    if (!firstName || !lastName || !email || !phoneNumber || !locations) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Email format validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    // Check for duplicate email
    const existingSeller = await Seller.findOne({ email });
    if (existingSeller) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    const newSeller = await Seller.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      locations,
    });

    res.status(201).json({
      message: "Seller registered successfully",
      seller: {
        _id: newSeller._id,
        firstName: newSeller.firstName,
        lastName: newSeller.lastName,
        email: newSeller.email,
        phoneNumber: newSeller.phoneNumber,
        locations: newSeller.locations,
      },
    });
  } catch (error) {
    console.error("Error in registerSeller:", error);

    if (error.code === 11000) {
      return res.status(409).json({
        message: "Email already registered",
      });
    }

    res.status(500).json({
      message: "Internal server error",
    });
  }
}
