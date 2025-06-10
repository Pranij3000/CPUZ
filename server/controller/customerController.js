import Customer from "../models/customer.js";
import jwt from "jsonwebtoken";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const registerCustomer = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Basic input validation
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Check for duplicate email
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const newCustomer = await Customer.create({
      firstName,
      lastName,
      email,
      password,
    });

    const token = signToken(newCustomer._id);

    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    res.status(201).json({
      message: "User registered successfully",
      customer: {
        _id: newCustomer._id,
        firstName: newCustomer.firstName,
        lastName: newCustomer.lastName,
        email: newCustomer.email,
      },
    });
  } catch (error) {
    console.error("Error in registerCustomer:", error);
    if (error.code === 11000) {
      return res.status(409).json({ message: "Email already registered" });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};
