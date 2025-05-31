import SectionTitle from "../components/ui/SectionTitle.jsx";
import PrimaryButton from "../components/button/PrimaryButton.jsx";
import FaqBox from "../components/ui/FaqBox.jsx";

import "./faq.scss";
export default function Faq() {
  return (
    <section className="faq bg-main-gradient pt-64 pt-lg-96 pb-96 pb-md-120 pb-xl-160 overflow-hidden">
      <div className="container" data-aos="fade-up">
        <div className="faq-wrapper">
          <div className="row">
            <div className="col-md-4">
              <div className="faq-description-wrapper d-flex flex-column">
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
              <div className="faq-body-wrapper d-flex flex-column ">
                <FaqBox title="What is CPUZ and how does it work?" description="CPUZ is an online platform that helps you build custom PCs by guiding you through component selection, checking compatibility, and showing real-time prices in Nepal."></FaqBox>
                <FaqBox title="Can I build a PC as a beginner using CPUZ?" description="Yes! CPUZ is designed for all experience levels. It provides step-by-step assistance, suggestions, and tips to help beginners build with ease."></FaqBox>
                <FaqBox title="Are the sellers on CPUZ verified?" description="Yes, CPUZ partners with reputable and verified sellers to ensure you receive genuine products, competitive pricing, and dependable customer service."></FaqBox>
                <FaqBox title="Does CPUZ provide detailed information about PC parts?" description="Yes, CPUZ offers in-depth descriptions for each component, including specifications, features, and performance insights. This helps users make smart and informed choices based on their needs."></FaqBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
