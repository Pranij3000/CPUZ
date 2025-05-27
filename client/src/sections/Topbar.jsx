import SimpleButton from "../components/button/SimpleButton";
import PrimaryButton from "../components/button/PrimaryButton";
import SecondaryButton from "../components/button/SecondaryButton";

import NeedHelp from "../components/button/NeedHelp";

import "./Topbar.scss";

export default function Topbar() {
  return (
    <>
      <nav className="topbar bg-main-bg border-bottom-light-bg py-4 d-none d-md-block">
        <div className="container">
          <div className="topbar-wrapper d-flex align-items-center justify-content-between">
            <NeedHelp></NeedHelp>
            <div className="button-wrapper d-flex align-items-center">
              <SimpleButton placeholder="Sign Up"></SimpleButton>
              <SimpleButton placeholder="Log in"></SimpleButton>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
