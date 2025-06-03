import SectionTitleDark from "../components/ui/SectionTitleDark";
import ContactCard from "../components/ui/ContactCard";

import PhoneSign from "../../assets/images/icons/phone-sign.svg";
import EmailSign from "../../assets/images/icons/email-sign.svg";
import LocationSign from "../../assets/images/icons/location-sign.svg";

import "./GetInTouch.scss";
export default function GetInTouch() {
  return (
    <section className="get-in-touch py-32 py-md-64 bg-white overflow-hidden">
      <div className="container" data-aos="fade-up">
        <div className="get-in-touch-wrapper">
          <div className="row">
            <div className="col-md-6">
              <div className="git-info-wrapper">
                <div className="title-wrapper mb-32">
                  <SectionTitleDark title="For any queries" spanText="Get In Touch" extraClass="text-start mb-12" />
                  <p className="text-black">Have questions, suggestions, or need help building your PC? We’re here for you. Whether you're a first-time builder or an experienced tech enthusiast, feel free to reach out. Our team is always ready to assist with product advice, compatibility checks, or general support.</p>
                </div>

                <div className="row">
                  <div className="col-12 col-sm-6">
                    <ContactCard svg={PhoneSign} title="Contact Number" info="+977 9861489265" link="tel:+977 9861489265" />
                  </div>
                  <div className="col-12 col-sm-6">
                    <ContactCard svg={EmailSign} title="Email Address" info="021bim024@sxc.edu.np" link="mailto:021bim024@sxc.edu.np" />
                  </div>
                  <div className="col-12">
                    <ContactCard svg={LocationSign} title="Head Office" info="Maru Dabali, Kathmandu" link="https://maps.app.goo.gl/WgTPh8oPkoPbVKkC9" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map-wrapper">
                <iframe title="Google Map" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.77730606577816!2d85.30551362782717!3d27.70379381769111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1857cb850001%3A0xc61d47603472aa48!2sMaru%20Dabali!5e0!3m2!1sen!2snp!4v1748928930089!5m2!1sen!2snp" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
