import SectionTitle from "../components/ui/SectionTitle";
import Background from "../../assets/images/placeholder-09.png";
import EmailInput from "../components/form/EmailInput";
import NumberInput from "../components/form/NumberInput";
import TextInput from "../components/form/TextInput";
import FormButton from "../components/button/FormButton";

import "./SellerRegistration.scss";
export default function SellerRegistration() {
  return (
    <>
      <section className="seller-registration form-section form-section-white py-64 py-md-96" style={{ background: `url(${Background})` }}>
        <div className="container">
          <form onSubmit="">
            <div className="form-wrapper bg-main-gradient rounded-16 overflow-hidden px-24 py-32 mx-auto">
              <SectionTitle title="Join as a" spanText="Seller" extraClass="mb-16 title-secondary" />
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
                    <NumberInput label="Phone Number" />
                  </div>
                  <div className="col-12">
                    <TextInput label="Locations" />
                  </div>
                  <div className="col-12">
                    <FormButton placeholder="Register as Seller" />
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
