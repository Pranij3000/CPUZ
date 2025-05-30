import SectionTitleDark from "../components/ui/SectionTitleDark";
import PcPlaceholder from "../../assets/images/placeholder-01.jpg";
import PrimaryButton from "../components/button/PrimaryButton.jsx";

import "./BuildYourPCAD.scss";
export default function BuildYourPCAD() {
  return (
    <section className="build-your-pc-ad py-64 py-lg-96 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-2">
            <SectionTitleDark title="Start Building" spanText="With Us" extraClass="text-start" />
            <div className="general-content-box mb-20">
              <p className="text-main-bg">CPUZ is an intuitive and user-friendly PC building platform that simplifies the entire process of creating a custom computer. Whether you're a first-time builder or a seasoned tech enthusiast, CPUZ offers a seamless experience that guides you from selecting components to completing your build. The platform ensures compatibility between parts, provides real-time pricing updates, and offers expert recommendations tailored to your needs, whether it's gaming, productivity, or content creation.</p>
              <p className="text-main-bg">With a sleek interface and helpful tips at every step, CPUZ removes the guesswork from building a PC. Users can explore pre-built templates, customize their own setups, and even receive performance estimates based on their selected components. CPUZ is more than just a tool; it is your personal PC building assistant, making the journey from idea to fully built rig smooth, informed, and enjoyable.</p>
            </div>
            <PrimaryButton placeholder="Build Your PC" path="/build-your-pc" />
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="bypc-image-wrapper overflow-hidden">
              <img src={PcPlaceholder} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
