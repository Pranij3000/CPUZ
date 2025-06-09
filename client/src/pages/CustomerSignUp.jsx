import { useState } from "react";

import formImage from "../../assets/images/placeholder-07.png";
import SectionTitleDark from "../components/ui/SectionTitleDark";
import EmailInput from "../components/form/EmailInput";
import PasswordInput from "../components/form/PasswordInput";
import TextInput from "../components/form/TextInput";
import FormButton from "../components/button/FormButton";

import "./CustomerSignUp.scss";
export default function CustomerSignUp() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [submitStatus, setSubmitStatus] = useState(null);

	const validateForm = (data) => {
		if (!data.firstName?.trim()) return "First Name is required";
		if (!data.lastName?.trim()) return "Last Name is required";
		if (!data.email?.trim()) return "Email is required";
		if (!/\S+@\S+\.\S+/.test(data.email)) return "Invalid email format";
		if (!data.password?.trim()) return "Password is required";
		if (data.password.length < 6) return "Password must be at least 6 characters";
		return null;
	};

	const handleInput = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;
		const formDataObj = {
			firstName: form.firstName.value,
			lastName: form.lastName.value,
			email: form.email.value,
			password: form.password.value,
		};

		console.log(formDataObj);

		const validationError = validateForm(formDataObj);
		if (validationError) {
			setSubmitStatus(`Error: ${validationError}`);
			return;
		}

		try {
			const response = await fetch("/api/customer/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formDataObj),
			});

			const data = await response.json();
			if (response.ok) {
				setSubmitStatus("Customer registered successfully");
				setFormData({
					firstName: "",
					lastName: "",
					email: "",
					password: "",
				});
				form.reset();
			} else {
				setSubmitStatus(`Error: ${data.message || "Registration failed"}`);
			}
		} catch (error) {
			setSubmitStatus("Error: Network issue, please try again later");
		}
	};

	return (
		<>
			<section className="form-section bg-light-bg py-64 py-md-96">
				<div className="container">
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className="register-form-wrapper form-wrapper bg-white rounded-16 overflow-hidden">
							<div className="row">
								<div className="col-md-6">
									<div className="form-image-wrapper d-flex d-md-block align-items-end">
										<img src={formImage} alt="" className="img-fluid" />
									</div>
								</div>
								<div className="col-md-6">
									<div className="register-form px-24 pr-md-24 py-32 mx-auto">
										<SectionTitleDark title="Register Now" spanText="" extraClass="text-start mb-32" />
										<div className="form-filled">
											<div className="row">
												<div className="col-md-6">
													<TextInput label="First Name" name="firstName" value={formData.firstName} onChange={(e) => handleInput(e)} />
												</div>
												<div className="col-md-6">
													<TextInput label="Last Name" name="lastName" value={formData.lastName} onChange={(e) => handleInput(e)} />
												</div>
												<div className="col-12">
													<EmailInput label="Email Address" name="email" value={formData.email} onChange={(e) => handleInput(e)} />
												</div>
												<div className="col-12">
													<PasswordInput label="Password" name="password" value={formData.password} onChange={(e) => handleInput(e)} />
												</div>
												<div className="col-12">
													<FormButton placeholder="Register" type="submit" />
												</div>
											</div>
											{submitStatus && <div className={`submit-status ${submitStatus.startsWith("Error") ? "text-danger" : "text-success"}`}>{submitStatus}</div>}
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
