import Customer from "../models/customer.js";

const signToken = (id) => {
	//jwt token
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "7d",
	});
};

export const registerCustomer = async (req, res) => {
	try {
		const { firstName, lastName, email, password } = req.body;

		// All fields required validation
		// validation email and password
		// Duplicate Check
		const existingCustomer = await Customer.find({ email });

		if (existingCustomer) {
			return res.status(404).json({
				message: "Email Already Registered",
			});
		}

		const newCustomer = await Customer.create({
			firstName,
			lastName,
			email,
			password,
		});

		const token = signToken(newCustomer._id);

		// ======= create a jwt token ===========
		res.cookie("jwt", token, {
			maxAge: 7 * 24 * 60 * 60 * 1000, //7 days in milliseconds
			httpOnly: true, //prevents any XSS attacks
			sameSte: "strict", //prevents any CSRF attacks
			secure: process.env.NODE_ENV === "production",
		});

		res.status(200).json({
			message: "User Registered Succesfully",
			customer: {
				_id: newCustomer._id,
				firstName: newCustomer.firstName,
				lastName: newCustomer.lastName,
				email: newCustomer.email,
			},
		});
	} catch (error) {
		console.log("Error in Register Customer: ", error);
		res.status(500).json({
			message: "Internal Server Error",
		});
	}
};

// login ko lagi che use matchPassword function cerated in customer schema
