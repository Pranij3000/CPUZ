import SectionTitleDark from "../components/ui/SectionTitleDark";
import FormButton from "../components/button/FormButton";
import EmailInput from "../components/form/EmailInput";
import PasswordInput from "../components/form/PasswordInput";

import formImage from "../../assets/images/placeholder-06.png";
import "./CustomerLogin.scss";
export default function CustomerLogin() {
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
                          <EmailInput label="Email Address" />
                        </div>
                        <div className="col-12">
                          <PasswordInput label="Password" />
                        </div>
                        <div className="col-12">
                          <FormButton placeholder="Sign IN" />
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
