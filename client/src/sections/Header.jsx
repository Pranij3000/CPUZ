import "./Header.scss";

//REACT COMPONENTS
import { Link } from "react-router-dom";
import { useState } from "react";
//IMAGES
import LogoWhite from "../components/icons/LogoWhite.jsx";

export default function Header() {
  return (
    <>
      <header className="header border-bottom-light-bg">
        <div className="container">
          <div className="header-wrapper d-flex align-items-center justify-content-between py-8">
            <Link to="/" className="header-logo-wrapper">
              <LogoWhite></LogoWhite>
            </Link>
            <button className="hamburger-menu px-16">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
