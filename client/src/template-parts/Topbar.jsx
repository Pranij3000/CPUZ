import PrimaryButton from "../components/button/PrimaryButton";
import NeedHelp from "../components/button/NeedHelp";

export default function Topbar() {
  return (
    <>
      <nav className="topbar bg-main-bg border-bottom-light-bg py-4">
        <div className="container">
          <div className="topbar-wrapper d-md-flex align-items-center justify-content-between">
            <NeedHelp></NeedHelp>
            <PrimaryButton placeholder="Login/Register"></PrimaryButton>
          </div>
        </div>
      </nav>
    </>
  );
}
