import { useState } from "react";
import axios from "axios";

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
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setError("All fields are required");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Invalid email format");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
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
      const response = await axios.post("http://localhost:5000/api/customer/register", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      setSuccess(`Registration successful! Go to Login.`);
      setFormData({ firstName: "", lastName: "", email: "", password: "" });
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
            setError("This email is already registered. Please use a different email or try logging in.");
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
      <section className="form-section bg-light-bg py-64 py-md-96">
        <div className="container">
          <form onSubmit={handleSubmit}>
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
                    {error && (
                      <div className="alert alert-danger mb-3" role="alert">
                        {error}
                      </div>
                    )}

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
                          <PasswordInput label="Password" name="password" value={formData.password} onChange={handleInput} />
                        </div>
                        <div className="col-12">
                          <FormButton placeholder={loading ? "Registering..." : "Register"} type="submit" disabled={loading} />
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
