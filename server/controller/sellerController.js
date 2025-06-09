import seller from "../models/seller.js";

export async function registerSeller(req, res) {
	try {
		const { firstName, lastName, email, phoneNumber, locations } = req.body;

		if (!firstName || !lastName || !email || !phoneNumber || !locations) {
			return res.status(400).json({
				messagge: "All Fields are required",
			});
		}

		const newSeller = await seller.create({
			firstName,
			lastName,
			email,
			phoneNumber,
			locations,
		});

		res.status(200).json({
			message: "Registered Succesfully",
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: "Internal Server Error",
		});
	}
}
