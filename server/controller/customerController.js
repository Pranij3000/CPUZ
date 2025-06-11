import Customer from "../models/customer.js";
import jwt from "jsonwebtoken";

const signToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "7d",
	});
};

const createSendToken = (customer, statusCode, res, message) => {
	const token = signToken(customer._id);

	const cookieOptions = {
		maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
		httpOnly: true,
		sameSite: "strict",
		secure: process.env.NODE_ENV === "production",
	};

	res.cookie("jwt", token, cookieOptions);

	// Remove password from output
	customer.password = undefined;

	res.status(statusCode).json({
		message,
		customer: {
			_id: customer._id,
			firstName: customer.firstName,
			lastName: customer.lastName,
			email: customer.email,
			createdAt: customer.createdAt,
			updatedAt: customer.updatedAt,
		},
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

export const loginCustomer = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Basic input validation
		if (!email || !password) {
			return res.status(400).json({ message: "Email and password are required" });
		}

		if (!/^\S+@\S+\.\S+$/.test(email)) {
			return res.status(400).json({ message: "Invalid email format" });
		}

		// Find customer by email and include password field
		const customer = await Customer.findOne({ email }).select("+password");

		if (!customer) {
			return res.status(401).json({ message: "Invalid email or password" });
		}

		// Check if password matches
		const isPasswordCorrect = await customer.matchPassword(password);

		if (!isPasswordCorrect) {
			return res.status(401).json({ message: "Invalid email or password" });
		}

		// If we get here, authentication successful
		const token = signToken(customer._id);

		res.cookie("jwt", token, {
			maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
			httpOnly: true,
			sameSite: "strict",
			secure: process.env.NODE_ENV === "production",
		});

		res.status(201).json({
			message: "Login successfully",
			customer: {
				_id: customer._id,
				firstName: customer.firstName,
				lastName: customer.lastName,
				email: customer.email,
			},
		});
	} catch (error) {
		console.error("Error in loginCustomer:", error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const logoutCustomer = async (req, res) => {
	try {
		res.cookie("jwt", "", {
			maxAge: 1,
			httpOnly: true,
			sameSite: "strict",
			secure: process.env.NODE_ENV === "production",
		});

		res.status(200).json({
			message: "Logged out successfully",
		});
	} catch (error) {
		console.error("Error in logoutCustomer:", error);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const getCustomerProfile = async (req, res) => {
	try {
		// req.customer is set by the protect middleware
		const customer = await Customer.findById(req.customer.id);

		if (!customer) {
			return res.status(404).json({ message: "Customer not found" });
		}

		res.status(200).json({
			customer: {
				_id: customer._id,
				firstName: customer.firstName,
				lastName: customer.lastName,
				email: customer.email,
				createdAt: customer.createdAt,
				updatedAt: customer.updatedAt,
			},
		});
	} catch (error) {
		console.error("Error in getCustomerProfile:", error);
		res.status(500).json({ message: "Internal server error" });
	}
};
