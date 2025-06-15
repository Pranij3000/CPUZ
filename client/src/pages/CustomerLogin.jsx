import { useState } from "react";
import { useAuthStore } from "../Store/useAuthStore.js"; // Update path as needed

import SectionTitleDark from "../components/ui/SectionTitleDark";
import FormButton from "../components/button/FormButton";
import EmailInput from "../components/form/EmailInput";
import PasswordInput from "../components/form/PasswordInput";

import formImage from "../../assets/images/placeholder-06.png";
import "./CustomerLogin.scss";

export default function CustomerLogin() {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [loading, setLoading] = useState(false);

	// Get loginCustomer function from Zustand store
	const { loginCustomer } = useAuthStore();

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
		if (!formData.email || !formData.password) {
			setError("Email and password are required");
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
			// Use Zustand store method instead of direct axios call
			await loginCustomer(formData);

			setSuccess("Login successful! Redirecting...");

			// Clear form
			setFormData({
				email: "",
				password: "",
			});

			// Redirect to home or previous page
			setTimeout(() => {
				window.location.href = "/";
			}, 1500);
		} catch (error) {
			console.error("Login error:", error);

			if (error.response) {
				const statusCode = error.response.status;
				const message = error.response.data?.message || "Login failed";

				switch (statusCode) {
					case 400:
						setError(message);
						break;
					case 401:
						setError("Invalid email or password. Please check your credentials.");
						break;
					case 500:
						setError("Server error. Please try again later.");
						break;
					default:
						setError(message);
				}
			} else if (error.request) {
				setError("Unable to connect to server. Please check your internet connection.");
			} else {
				setError("An unexpected error occurred. Please try again.");
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<section className="form-section bg-light-bg py-64 py-md-96">
				<div className="container">
					<form onSubmit={handleSubmit}>
						<div className="login-form-wrapper form-wrapper bg-white rounded-16 overflow-hidden">
							<div className="row">
								<div className="col-md-6">
									<div className="form-image-wrapper">
										<img src={formImage} alt="" className="img-fluid" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="login-form px-24 py-32 mx-auto">
										<SectionTitleDark title="Sign in" spanText="" extraClass="text-start mb-32" />
										{error && <div className="alert alert-danger mb-3">{error}</div>}
										{success && <div className="alert alert-success mb-3">{success}</div>}
										<div className="form-filled">
											<div className="row">
												<div className="col-12">
													<EmailInput label="Email Address" name="email" value={formData.email} onChange={handleInput} />
												</div>
												<div className="col-12">
													<PasswordInput label="Password" name="password" value={formData.password} onChange={handleInput} />
												</div>
												<div className="col-12">
													<FormButton placeholder={loading ? "Signing in..." : "Sign In"} type="submit" disabled={loading} extraClass="width-100" />
												</div>
											</div>
										</div>
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
