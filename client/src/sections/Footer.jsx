import "./footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    {
      heading: "Quick Links",
      links: [
        { path: "/", label: "Home" },
        { path: "/build-your-pc", label: "Build Your PC" },
        { path: "/components-listing", label: "PC Components" },
        { path: "/become-a-seller", label: "Become a Seller" },
      ],
    },
    {
      heading: "Components",
      links: [
        { path: "/build-your-pc", label: "CPU/Processor" },
        { path: "/build-your-pc", label: "Graphic Card" },
        { path: "/build-your-pc", label: "Motherboard" },
        { path: "/build-your-pc", label: "Memory" },
        { path: "/build-your-pc", label: "Storage" },
        { path: "/build-your-pc", label: "Power Supply" },
        { path: "/build-your-pc", label: "Cooling" },
        { path: "/build-your-pc", label: "Monitor" },
      ],
    },
    {
      heading: "Company",
      links: [
        { path: "/about", label: "About CPUZ" },
        { path: "/contact-us", label: "Contact US" },
      ],
    },
    {
      heading: "Socials",
      links: [
        { path: "https://www.instagram.com/", label: "Instagram" },
        { path: "https://www.facebook.com/", label: "Facebook" },
        { path: "https://www.linkedin.com/", label: "Linkedin" },
      ],
    },
  ];
  return (
    <footer className="footer py-64 py-lg-96 bg-main-gradient">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-links mb-36">
            <div className="row justify-content-center">
              {footerLinks.map((item, index) => (
                <div className="col-6 col-md-3 col-xl-3" key={index}>
                  <div className="footer-links-wrapper">
                    <h5 className="footer-header mb-16 mx-auto">{item.heading}</h5>
                    <ul>
                      {item.links.map((listItem, index) => (
                        <li key={index} className="text-center">
                          <Link to={listItem.path} className="text-text">
                            {listItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="footer-contact-wrapper bg-primary-100 p-12 rounded-8">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-top mb-20">
                  <h5 className="footer-header mx-auto">Our Locations</h5>
                </div>
                <div className="footer-locations d-flex align-items-center">
                  <svg width="40" height="40" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <rect x="40" y="110" width="70" height="10" fill="#bebec2" />
                    <rect x="50" y="90" width="50" height="20" fill="#2ecc71" />
                    <polygon points="40,90 75,80 110,90 105,95 45,95" fill="#bebec2" />
                    <rect x="55" y="65" width="40" height="25" fill="#2ecc71" />
                    <polygon points="50,65 75,55 100,65 95,70 55,70" fill="#bebec2" />
                    <rect x="65" y="40" width="20" height="20" fill="#2ecc71" />
                    <polygon points="60,40 75,30 90,40 87,43 63,43" fill="#bebec2" />
                    <line x1="75" y1="20" x2="75" y2="30" stroke="#bebec2" strokeWidth="2" />
                    <circle cx="75" cy="18" r="2" fill="#bebec2" />
                  </svg>
                  <div className="footer-location-detail">
                    <p>Head Office</p>
                    <h6>Maru, Kathmandu</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-top mb-20">
                  <h5 className="footer-header mx-auto">Contact US</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
