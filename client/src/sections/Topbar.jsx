import SimpleButton from "../components/button/SimpleButton";
import PrimaryButton from "../components/button/PrimaryButton";
import SecondaryButton from "../components/button/SecondaryButton";

import NeedHelp from "../components/button/NeedHelp";

import "./Topbar.scss";

export default function Topbar() {
  return (
    <>
      <header className="topbar bg-main-bg py-4 d-none d-sm-block">
        <div className="container">
          <div className="topbar-wrapper d-flex align-items-center justify-content-between">
            <NeedHelp></NeedHelp>
            <div className="button-wrapper d-flex align-items-center">
              <SimpleButton placeholder="Sign Up" path="/register"></SimpleButton>
              <SimpleButton placeholder="Log in" path="/login"></SimpleButton>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
