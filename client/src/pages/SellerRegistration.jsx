import { useState } from "react";
import axios from "axios";

import SectionTitle from "../components/ui/SectionTitle";
import Background from "../../assets/images/placeholder-09.png";
import EmailInput from "../components/form/EmailInput";
import NumberInput from "../components/form/NumberInput";
import TextInput from "../components/form/TextInput";
import FormButton from "../components/button/FormButton";

import "./SellerRegistration.scss";

export default function SellerRegistration() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		locations: "",
	});

	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [loading, setLoading] = useState(false);

	const handleInput = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
		if (error) setError("");
		if (success) setSuccess("");
	};

	const validateForm = () => {
		if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.locations) {
			setError("All fields are required");
			return false;
		}
		if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
			setError("Invalid email format");
			return false;
		}

		return true;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setSuccess("");
		setLoading(true);

		if (!validateForm()) {
			setLoading(false);
			return;
		}

		try {
			const response = await axios.post("http://localhost:5000/api/seller/register", formData, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			setSuccess("Seller registration successful! Welcome to our platform.");
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				phoneNumber: "",
				locations: "",
			});
		} catch (error) {
			console.error("Registration error:", error);

			if (error.response) {
				// Server responded with error status
				const statusCode = error.response.status;
				const message = error.response.data?.message || "Registration failed";

				switch (statusCode) {
					case 400:
						setError(message);
						break;
					case 409:
						setError("This email is already registered. Please use a different email.");
						break;
					case 500:
						setError("Server error. Please try again later.");
						break;
					default:
						setError(message);
				}
			} else if (error.request) {
				// Network error
				setError("Unable to connect to server. Please check your internet connection and try again.");
			} else {
				// Other error
				setError("An unexpected error occurred. Please try again.");
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<section className="seller-registration form-section form-section-white py-64 py-md-96" style={{ background: `url(${Background})` }}>
				<div className="container">
					<form onSubmit={handleSubmit}>
						<div className="form-wrapper bg-main-gradient rounded-16 overflow-hidden px-24 py-32 mx-auto">
							<SectionTitle title="Join as a" spanText="Seller" extraClass="mb-16 title-secondary" />

							{error && (
								<div className="alert alert-danger mb-3" role="alert">
									{error}
								</div>
							)}

							{/* Success Alert */}
							{success && (
								<div className="alert alert-success mb-3" role="alert">
									{success}
								</div>
							)}

							<div className="form-filled">
								<div className="row">
									<div className="col-md-6">
										<TextInput label="First Name" name="firstName" value={formData.firstName} onChange={handleInput} />
									</div>
									<div className="col-md-6">
										<TextInput label="Last Name" name="lastName" value={formData.lastName} onChange={handleInput} />
									</div>
									<div className="col-12">
										<EmailInput label="Email Address" name="email" value={formData.email} onChange={handleInput} />
									</div>
									<div className="col-12">
										<NumberInput label="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleInput} />
									</div>
									<div className="col-12">
										<TextInput label="Locations" name="locations" value={formData.locations} onChange={handleInput} />
									</div>
									<div className="col-12">
										<FormButton placeholder={loading ? "Registering..." : "Register as Seller"} type="submit" disabled={loading} extraClass="width-100" />
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}
