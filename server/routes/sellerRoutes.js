import { Router } from "express";
import { registerSeller } from "../controller/sellerController.js";
// import { check, validationResult } from "express-validator";
// import Seller from "../models/seller";

const router = Router();

// router.post("/register", [check("firstName").notEmpty().withMessage("First Name is required").trim().escape(), check("lastName").notEmpty().withMessage("Last Name is required").trim().escape(), check("email").isEmail().withMessage("Invalid email format").normalizeEmail(), check("phoneNumber").notEmpty().withMessage("Phone Number is required").trim().escape(), check("locations").notEmpty().withMessage("Locations is required").trim().escape()], async (req, res) => {
// 	const errors = validationResult(req);
// 	if (!errors.isEmpty()) {
// 		return res.status(400).json({ errors: errors.array() });
// 	}

// 	const { firstName, lastName, email, phoneNumber, locations } = req.body;

// 	try {
// 		// Check if email already exists
// 		const existingSeller = await Seller.findOne({ email });
// 		if (existingSeller) {
// 			return res.status(400).json({ message: "Email already registered" });
// 		}

// 		// Create new seller
// 		const seller = new Seller({
// 			firstName,
// 			lastName,
// 			email,
// 			phoneNumber,
// 			locations,
// 		});

// 		await seller.save();
// 		res.status(201).json({ message: "Seller registered successfully" });
// 	} catch (error) {
// 		console.error("Server error:", error);
// 		res.status(500).json({ message: "Server error" });
// 	}
// });
router.post("/register", registerSeller);

export default router;
