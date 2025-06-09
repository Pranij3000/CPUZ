import { useState } from "react";

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
	const [submitStatus, setSubmitStatus] = useState(null);

	const validateForm = (data) => {
		if (!data.email?.trim()) return "Email is required";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Invalid email format";
		if (!data.password?.trim()) return "Password is required";
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
		setSubmitStatus(null);

		const form = e.target;
		const formDataObj = {
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
			const response = await fetch("/api/customer/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formDataObj),
			});

			const data = await response.json();
			if (response.ok) {
				setSubmitStatus("Login successful");
				setFormData({
					email: "",
					password: "",
				});
				form.reset();
			} else {
				setSubmitStatus(`Error: ${data.message || "Login failed"}`);
			}
		} catch (error) {
			setSubmitStatus("Error: Network issue, please try again later");
		}
	};
	return (
		<>
			<section className="form-section bg-light-bg py-64 py-md-96">
				<div className="container">
					<form onSubmit="">
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
										<div className="form-filled">
											<div className="row">
												<div className="col-12">
													<EmailInput label="Email Address" name="email" value={formData.email} onChange={handleInput} />
												</div>
												<div className="col-12">
													<PasswordInput label="Password" name="password" value={formData.password} onChange={handleInput} />
												</div>
												<div className="col-12">
													<FormButton placeholder="Sign IN" type="submit" />
												</div>
												{submitStatus && <div className={`submit-status ${submitStatus.startsWith("Error") ? "text-danger" : "text-success"}`}>{submitStatus}</div>}
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
