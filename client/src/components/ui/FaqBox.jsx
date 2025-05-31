import "./FaqBox.scss";
import { useState } from "react";

export default function FaqBox({ title, description }) {
  const [display, setDisplay] = useState(false);

  function changeDisplay() {
    console.log(display);
    setDisplay(!display);
  }
  return (
    <div className={`faq-box bg-primary-100 rounded-8 ${display ? "show" : ""}`} onClick={changeDisplay}>
      <div className="faq-box-title py-16 pl-20 pr-40">
        <h6 className="text-text ">{title}</h6>
        <svg className="arrow-icon" width="24" height="24" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.99902 11.8173C7.79043 11.8173 7.58187 11.7376 7.42284 11.5787L2.41845 6.57423C2.1001 6.25588 2.1001 5.73974 2.41845 5.42152C2.73666 5.10331 3.2527 5.10331 3.57107 5.42152L7.99902 9.84973L12.427 5.42168C12.7453 5.10346 13.2613 5.10346 13.5795 5.42168C13.898 5.73989 13.898 6.25603 13.5795 6.57438L8.5752 11.5788C8.4161 11.7378 8.20753 11.8173 7.99902 11.8173Z" fill="white" />
        </svg>
      </div>
      <div className="faq-box-description-box d-grid">
        <div className="faq-box-description px-20 overflow-hidden">
          <p className="text-text pb-16">{description}</p>
        </div>
      </div>
    </div>
  );
}
