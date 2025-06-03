import SectionTitleDark from "../components/ui/SectionTitleDark";
import ContactCard from "../components/ui/ContactCard";

export default function GetInTouch() {
  return (
    <section className="get-in-touch py-64 py-md-96 bg-white">
      <div className="container">
        <div className="get-in-touch-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="git-info-wrapper">
                <SectionTitleDark title="For any queries" spanText="Get In Touch" extraClass="text-start" />
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <ContactCard />
                  </div>
                  <div className="col-12 col-sm-6">
                    <ContactCard />
                  </div>
                  <div className="col-12">
                    <ContactCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <iframe title="Google Map" width="100%" height="100%" style={{ border: 0 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8398356435213!2d-122.42067968468192!3d37.77492927975974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c77bfa58f%3A0x6e8ddf541cced7c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1622191043681!5m2!1sen!2sus" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
