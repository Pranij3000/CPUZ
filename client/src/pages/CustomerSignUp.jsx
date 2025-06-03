import formImage from "../../assets/images/placeholder-07.png";
import SectionTitleDark from "../components/ui/SectionTitleDark";
import EmailInput from "../components/form/EmailInput";
import PasswordInput from "../components/form/PasswordInput";
import TextInput from "../components/form/TextInput";
import FormButton from "../components/button/FormButton";

import "./CustomerSignUp.scss";
export default function CustomerSignUp() {
  return (
    <>
      <section className="form-section bg-light-bg py-64 py-md-96">
        <div className="container">
          <form onSubmit="">
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
                          <TextInput label="First Name" />
                        </div>
                        <div className="col-md-6">
                          <TextInput label="Last Name" />
                        </div>
                        <div className="col-12">
                          <EmailInput label="Email Address" />
                        </div>
                        <div className="col-12">
                          <PasswordInput label="Password" />
                        </div>
                        <div className="col-12">
                          <PasswordInput label="Confirm Password" />
                        </div>
                        <div className="col-12">
                          <FormButton placeholder="Register" />
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
