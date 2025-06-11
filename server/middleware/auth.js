import jwt from "jsonwebtoken";
import Customer from "../models/customer.js";

export const protect = async (req, res, next) => {
	try {
		let token;

		// Check if token exists in cookies
		if (req.cookies.jwt) {
			token = req.cookies.jwt;
		}

		if (!token) {
			return res.status(401).json({
				message: "Not authenticated. Please log in to access this resource.",
			});
		}

		// Verify token
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		// Check if customer still exists
		const customer = await Customer.findById(decoded.id);
		if (!customer) {
			return res.status(401).json({
				message: "The customer belonging to this token no longer exists.",
			});
		}

		// Grant access to protected route
		req.customer = customer;
		next();
	} catch (error) {
		console.error("Error in protect middleware:", error);

		if (error.name === "JsonWebTokenError") {
			return res.status(401).json({ message: "Invalid token. Please log in again." });
		}

		if (error.name === "TokenExpiredError") {
			return res.status(401).json({ message: "Your token has expired. Please log in again." });
		}

		res.status(500).json({ message: "Internal server error" });
	}
};
