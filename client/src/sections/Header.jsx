import "./Header.scss";
import SecondaryButton from "../components/button/SecondaryButton.jsx";
import PrimaryButton from "../components/button/PrimaryButton.jsx";
import NavbarLink from "../components/button/NavbarLink.jsx";
import Overlay from "../components/backgrounds/Overlay.jsx";

//REACT COMPONENTS
import { Link } from "react-router-dom";
import { useState } from "react";

//IMAGES
import LogoWhite from "../components/icons/LogoWhite.jsx";
import LogoBlack from "../components/icons/LogoBlack.jsx";
import HamburgerIcon from "../components/icons/HamburgerIcon.jsx";
import CrossIcon from "../components/icons/CrossIcon.jsx";

export default function Header() {
	const [menuDisplay, setMenuDisplay] = useState(false);
	function menuToggle() {
		setMenuDisplay(!menuDisplay);
	}

	const menuItems = [
		{ path: "/", label: "Home" },
		{ path: "/build-your-pc", label: "Build Your PC" },
		{ path: "/components-listing", label: "PC Components" },
		{ path: "/become-a-seller", label: "Become a Seller" },
		{ path: "/about", label: "About CPUZ" },
		{ path: "/contact-us", label: "Contact US" },
	];

	return (
		<>
			<nav className="header bg-main-bg py-8 bg-main-bg">
				<div className="container">
					<div className="header-wrapper">
						<div className="row">
							<div className="col-4 col-lg-2">
								<Link to="/" className="header-logo-wrapper d-block ml-4">
									<LogoWhite></LogoWhite>
								</Link>
							</div>
							<div className="col-8 col-lg-7">
								<div className="hamburger-menu-wrapper d-flex justify-content-end align-items-center d-lg-none">
									<button className="hamburger-menu mx-16" onClick={menuToggle}>
										<HamburgerIcon></HamburgerIcon>
									</button>
								</div>
								<div className="navbar-lg-screen d-none d-lg-flex align-items-center">
									<ul className="nav-lg-links d-flex align-items-center justify-content-center">
										<NavbarLink path="/build-your-pc" label="Build Your PC"></NavbarLink>
										<NavbarLink path="/components-listing" label="PC Components"></NavbarLink>
										<NavbarLink path="/become-a-seller" label="Become a Seller"></NavbarLink>
										<NavbarLink path="/about" label="About CPUZ"></NavbarLink>
										<NavbarLink path="/contact-us" label="Contact US"></NavbarLink>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 d-none d-lg-block">
								<div className="navbar-button-wrapper d-flex align-items-center">
									<div className="user-button-wrapper">
										<SecondaryButton placeholder="Register" path="/register"></SecondaryButton>
									</div>
									<div className="user-button-wrapper">
										<PrimaryButton placeholder="Login" path="/login"></PrimaryButton>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<div className={`menu ${menuDisplay ? "show" : ""}`}>
				<div className="menu-wrapper bg-white px-16 px-sm-48 py-20">
					<div className="menu-wrapper-title mb-32 d-flex justify-content-between align-items-center">
						<button className="cross-icon-wrapper" onClick={menuToggle}>
							<CrossIcon></CrossIcon>
						</button>
						<Link to="/" className="menu-logo-wrapper d-block">
							<LogoBlack></LogoBlack>
						</Link>
					</div>
					<div className="menu-options-wrapper mb-52">
						<ul>
							{menuItems.map((item) => (
								<li key={item.path} className="menu-option pb-4 border-bottom-black-100">
									<Link to={item.path} className="colored-link text-main-bg" onClick={menuToggle}>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="login-buttons">
						<div className="row">
							<div className="col-6">
								<SecondaryButton placeholder="Register" path="/register" onClick={menuToggle}></SecondaryButton>
							</div>
							<div className="col-6">
								<PrimaryButton placeholder="Login" path="/login" onClick={menuToggle}></PrimaryButton>
							</div>
						</div>
					</div>
				</div>
				<Overlay onClick={menuToggle}></Overlay>
			</div>
		</>
	);
}
