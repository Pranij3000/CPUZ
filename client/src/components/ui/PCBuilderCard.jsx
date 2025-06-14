import { useEffect, useState } from "react";
import "./PCBuilderCard.scss";
import PrimaryButton from "../button/PrimaryButton";

export default function PCBuilderCard({ component, svg }) {
  const [popup, setPopup] = useState(false);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const selectedComponent = component.toLowerCase().replace(/\s+/g, "");

  function openPopup(e) {
    e.preventDefault();
    setPopup(true);
  }

  function closePopup(e) {
    e.preventDefault();
    setPopup(false);
  }

  useEffect(() => {
    if (popup) {
      fetch(`http://localhost:5000/api/parts/${selectedComponent}`)
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch((err) => console.error("Fetch error:", err));
    }
  }, [popup, selectedComponent]);

  useEffect(() => {
    setFilteredItems([...items]);
  }, [items]);

  return (
    <>
      <div className="pc-builder-card px-20 py-20 border-black-100 mb-12 rounded-8">
        <div className="pc-builder-card-top pb-4 border-bottom-white-200">
          <div className="row">
            <div className="col-7 col-md-9 col-xl-10">
              <div className="pc-builder-card-title-wrapper d-flex align-items-center flex-wrap">
                <img src={svg} alt={`${component} icon`} className="pc-component-icon" />
                <h4 className="text-light-bg">{component}</h4>
              </div>
            </div>
            <div className="col-5 col-md-3 col-xl-2">
              <PrimaryButton placeholder="Select Component" onClick={openPopup} />
            </div>
          </div>
        </div>
        <div className="pc-part py-8">
          <p>No Components Selected</p>
        </div>
      </div>

      <div className={`popup bg-main-gradient rounded-8 border-top-secondary px-20 px-xl-40 py-20 ${popup ? "show" : ""}`}>
        <div className="popup-top d-flex mb-16 justify-content-between">
          <h3>Choose a {component}</h3>
          <div className="cross-icon-wrapper" onClick={closePopup}>
            <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3387 22.9963C9.99242 23.0166 9.65185 22.9009 9.38882 22.6736C8.87007 22.1491 8.87007 21.3021 9.38882 20.7776L20.7477 9.36144C21.2872 8.85403 22.1339 8.88223 22.6387 9.4245C23.0953 9.91486 23.1219 10.6686 22.701 11.1902L11.2752 22.6736C11.0156 22.8976 10.6805 23.0131 10.3387 22.9963Z" fill="white" />
              <path d="M21.5653 22.9914C21.2158 22.9899 20.8808 22.8502 20.6326 22.6023L9.32015 11.2127C8.84152 10.65 8.90659 9.80311 9.46552 9.32118C9.96437 8.89107 10.7001 8.89107 11.1989 9.32118L22.578 20.7107C23.1152 21.2171 23.1429 22.0661 22.64 22.6069C22.62 22.6284 22.5993 22.6492 22.578 22.6694C22.2993 22.9133 21.9326 23.0299 21.5653 22.9914Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className="row">
          {filteredItems.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-xl-4">
              <p>{item.name || item.model}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`overlay ${popup ? "show" : ""}`} onClick={closePopup}></div>
    </>
  );
}
