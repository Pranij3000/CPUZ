import SectionTitle from "../components/ui/SectionTitle.jsx";
import PrimaryButton from "../components/button/PrimaryButton.jsx";

import "./faq.scss";
export default function Faq() {
  return (
    <section className="faq bg-main-gradient py-64 py-lg-96">
      <div className="container">
        <div className="faq-wrapper">
          <div className="row">
            <div className="col-md-4">
              <div className="faq-description-wrapper d-flex flex-column justify-content-between">
                <SectionTitle title="Find All Your PC Building Answers in" spanText="Our FAQs" extraClass="text-start" />
                <div className="faq-description-contact-us border-top-light-bg pt-8">
                  <div className="row">
                    <div className="col-12">
                      <p>Still have questions? Feel free to contact us anytime for further assistance.</p>
                    </div>
                    <div className="col-lg-6">
                      <PrimaryButton path="/contact-us" placeholder="Contact-US" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="faq-body-wrapper d-flex flex-column"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
