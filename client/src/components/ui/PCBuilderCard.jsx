import { useState } from "react";
import "./PCBuilderCard.scss";

import PrimaryButton from "../button/PrimaryButton";
export default function PCBuilderCard({ component, svg }) {
  const [popup, setPopup] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setPopup(!popup);
    console.log(popup);
  }
  return (
    <div className="pc-builder-card px-20 py-20">
      <div className="pc-builder-card-top pb-4 border-bottom-white-200">
        <div className="row">
          <div className="col-7 col-md-9 col-xl-10">
            <div className="pc-builder-card-title-wrapper d-flex align-items-center flex-wrap">
              <img src={svg} alt={`${component} icon`} className="pc-component-icon" />
              <h4 className="text-light-bg">{component}</h4>
            </div>
          </div>
          <div className="col-5 col-md-3 col-xl-2">
            <PrimaryButton placeholder="Select Component" onClick={(e) => handleClick(e)} />
          </div>
        </div>
      </div>
      <div className="pc-part py-8">
        <p>No Components Selected</p>
      </div>
    </div>
  );
}
