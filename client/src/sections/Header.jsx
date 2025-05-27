//REACT COMPONENTS

//IMAGES
import LogoWhite from "../components/icons/LogoWhite.jsx";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper d-flex align-items-center justify-content-between">
            <LogoWhite></LogoWhite>
          </div>
        </div>
      </header>
    </>
  );
}
