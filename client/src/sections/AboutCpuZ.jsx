import SectionTitleDark from "../components/ui/SectionTitleDark";

import "./AboutCpuZ.scss";
export default function AboutCpuZ() {
  return (
    <>
      <section className="about-cpuz pt-64 pb-64 pb-lg-96 bg-white">
        <div className="container" data-aos="fade-up">
          <div className="about-cpuz-wrapper">
            <div data-aos="fade-up" className="about-us-wrapper mx-auto pb-80 mb-80 border-bottom-black-100">
              <SectionTitleDark title="" spanText="About CPUZ" extraClass="text-center mb-12" />
              <p className="text-black text-center">CPUZ is Nepal’s dedicated PC building platform, designed to make the process of assembling your dream computer simple, smart, and accessible. Whether you're building for gaming, school, or work, we provide the tools and guidance you need from start to finish.</p>
            </div>
            <div data-aos="fade-up" className="mission-wrapper mx-auto pb-80 mb-80 border-bottom-black-100">
              <SectionTitleDark title="" spanText="Our Mission" extraClass="text-center mb-12" />
              <p className="text-black text-center">Our mission is to empower people to build reliable and high-performing PCs by making the process easier, more transparent, and locally relevant. We aim to close the knowledge gap, giving everyone from beginners to enthusiasts the confidence to build on their own terms.</p>
            </div>
            <div data-aos="fade-up" className="offer-wrapper mx-auto styled-ul green-list">
              <SectionTitleDark title="" spanText="What We Offer" extraClass="text-center mb-12" />
              <p className="text-black text-center mb-24"> We understand the local market, pricing, and availability. By working with trusted Nepali vendors, we bring you region-specific insights and support, making sure you don’t just build a PC but build it right.</p>
              <ul className="mx-auto">
                <li>Component Compatibility</li>
                <li>Detailed Product Descriptions</li>
                <li>Best Seller Listings</li>
                <li>Easy-to-Use Interface</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
