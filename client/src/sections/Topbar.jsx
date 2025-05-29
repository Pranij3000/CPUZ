import Facebook from "../components/icons/Facebook";
import Instagram from "../components/icons/Instagram";
import NeedHelp from "../components/button/NeedHelp";

import "./Topbar.scss";

export default function Topbar() {
  return (
    <>
      <header className="topbar bg-main-bg py-4">
        <div className="container">
          <div className="topbar-wrapper d-flex align-items-center justify-content-between">
            <NeedHelp></NeedHelp>
            <div className="button-wrapper d-flex align-items-center">
              <Instagram></Instagram>
              <Facebook></Facebook>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
