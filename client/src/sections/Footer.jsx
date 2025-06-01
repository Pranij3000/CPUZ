import "./footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
	const footerLinks = [
		{
			heading: "Quick Links",
			links: [
				{ path: "/", label: "Home" },
				{ path: "/build-your-pc", label: "Build Your PC" },
				{ path: "/components-listing", label: "PC Components" },
				{ path: "/become-a-seller", label: "Become a Seller" },
			],
		},
		{
			heading: "Components",
			links: [
				{ path: "/build-your-pc", label: "CPU/Processor" },
				{ path: "/build-your-pc", label: "Graphic Card" },
				{ path: "/build-your-pc", label: "Motherboard" },
				{ path: "/build-your-pc", label: "Memory" },
				{ path: "/build-your-pc", label: "Storage" },
				{ path: "/build-your-pc", label: "Power Supply" },
				{ path: "/build-your-pc", label: "Cooling" },
				{ path: "/build-your-pc", label: "Monitor" },
			],
		},
		{
			heading: "Company",
			links: [
				{ path: "/about", label: "About CPUZ" },
				{ path: "/contact-us", label: "Contact US" },
			],
		},
		{
			heading: "Socials",
			links: [
				{ path: "https://www.instagram.com/", label: "Instagram" },
				{ path: "https://www.facebook.com/", label: "Facebook" },
				{ path: "https://www.linkedin.com/", label: "Linkedin" },
			],
		},
	];
	return (
		<footer className="footer py-64 py-lg-96 bg-main-gradient overflow-hidden">
			<div className="container">
				<div className="footer-wrapper">
					<div className="footer-links mb-36 rounded-16 py-32">
						<div className="row justify-content-center">
							{footerLinks.map((item, index) => (
								<div className="col-6 col-md-3 col-xl-3" key={index}>
									<div className="footer-links-wrapper">
										<h5 className="footer-header mb-16 mx-auto">{item.heading}</h5>
										<ul>
											{item.links.map((listItem, index) => (
												<li key={index} className="text-center">
													<Link to={listItem.path} className="text-text">
														{listItem.label}
													</Link>
												</li>
											))}
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="footer-contact-wrapper">
						<div className="row justify-content-center">
							<div className="col-md-6 col-xl-5">
								<div className="locations-wrapper bg-primary-100 rounded-8 p-16">
									<div className="footer-top mb-32">
										<h5 className="footer-header mx-auto">Our Location</h5>
									</div>
									<div className="footer-locations-wrapper">
										<div className="row">
											<div className="col-sm-6 col-md-12 col-lg-6">
												<div className="footer-locations d-flex align-items-center">
													<svg width="40" height="40" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" fill="none">
														<rect x="40" y="110" width="70" height="10" fill="#bebec2" />
														<rect x="50" y="90" width="50" height="20" fill="#2ecc71" />
														<polygon points="40,90 75,80 110,90 105,95 45,95" fill="#bebec2" />
														<rect x="55" y="65" width="40" height="25" fill="#2ecc71" />
														<polygon points="50,65 75,55 100,65 95,70 55,70" fill="#bebec2" />
														<rect x="65" y="40" width="20" height="20" fill="#2ecc71" />
														<polygon points="60,40 75,30 90,40 87,43 63,43" fill="#bebec2" />
														<line x1="75" y1="20" x2="75" y2="30" stroke="#bebec2" strokeWidth="2" />
														<circle cx="75" cy="18" r="2" fill="#bebec2" />
													</svg>
													<div className="footer-location-detail">
														<p>Head Office</p>
														<h6>Maru, Kathmandu</h6>
													</div>
												</div>
											</div>
											<div className="col-sm-6 col-md-12 col-lg-6">
												<div className="footer-locations d-flex align-items-center">
													<svg width="40" height="40" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" fill="none">
														<rect x="40" y="110" width="70" height="10" fill="#bebec2" />
														<rect x="50" y="90" width="50" height="20" fill="#2ecc71" />
														<polygon points="40,90 75,80 110,90 105,95 45,95" fill="#bebec2" />
														<rect x="55" y="65" width="40" height="25" fill="#2ecc71" />
														<polygon points="50,65 75,55 100,65 95,70 55,70" fill="#bebec2" />
														<rect x="65" y="40" width="20" height="20" fill="#2ecc71" />
														<polygon points="60,40 75,30 90,40 87,43 63,43" fill="#bebec2" />
														<line x1="75" y1="20" x2="75" y2="30" stroke="#bebec2" strokeWidth="2" />
														<circle cx="75" cy="18" r="2" fill="#bebec2" />
													</svg>
													<div className="footer-location-detail">
														<p>Branch Office</p>
														<h6>Tokha, Kathmandu</h6>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-xl-5">
								<div className="contact-us-wrapper bg-primary-100 rounded-8 p-16">
									<div className="footer-top mb-32">
										<h5 className="footer-header mx-auto">Contact US</h5>
									</div>
									<div className="footer-contact-us">
										<div className="row">
											<div className="col-sm-6 col-md-12 col-lg-6">
												<a href="tel: 9861489265" className="footer-contacts d-flex align-items-center">
													<svg width="24" height="24" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M14.1641 13.0843C13.6414 12.5683 12.9888 12.5683 12.4694 13.0843C12.0732 13.4772 11.677 13.8701 11.2874 14.2696C11.1809 14.3795 11.091 14.4028 10.9612 14.3295C10.7048 14.1897 10.4318 14.0765 10.1854 13.9233C9.03673 13.2009 8.07452 12.2719 7.22218 11.2265C6.79934 10.7071 6.42312 10.1511 6.16009 9.52515C6.10682 9.39863 6.11681 9.31539 6.22002 9.21218C6.61622 8.82929 7.00244 8.43642 7.39198 8.04354C7.93469 7.49751 7.93469 6.85826 7.38866 6.3089C7.07902 5.99593 6.76938 5.68962 6.45974 5.37665C6.14011 5.05703 5.82381 4.73407 5.50086 4.41777C4.97813 3.90837 4.32556 3.90837 3.80617 4.4211C3.40663 4.81398 3.02375 5.21684 2.61756 5.60306C2.24133 5.95931 2.05155 6.39546 2.0116 6.90487C1.94834 7.7339 2.15143 8.51632 2.43776 9.27877C3.02375 10.8569 3.91604 12.2586 4.99811 13.5438C6.45974 15.2818 8.20437 16.6568 10.2453 17.649C11.1643 18.0951 12.1165 18.4381 13.1519 18.4947C13.8644 18.5346 14.4837 18.3548 14.9798 17.7988C15.3194 17.4193 15.7023 17.073 16.0619 16.7101C16.5946 16.1707 16.5979 15.5182 16.0685 14.9854C15.4359 14.3495 14.8 13.7169 14.1641 13.0843Z" fill="#2ecc71" />
														<path d="M13.5271 10.4308L14.7557 10.221C14.5625 9.09233 14.0298 8.07019 13.2208 7.2578C12.3651 6.40213 11.283 5.86276 10.0911 5.69629L9.91797 6.93151C10.8402 7.06136 11.6792 7.47754 12.3418 8.1401C12.9677 8.76604 13.3773 9.55845 13.5271 10.4308Z" fill="#2ecc71" />
														<path d="M15.4492 5.09031C14.0309 3.67197 12.2363 2.77634 10.2553 2.5L10.0822 3.73523C11.7935 3.97495 13.345 4.75071 14.5703 5.97262C15.7322 7.13459 16.4947 8.60288 16.771 10.2177L17.9996 10.0079C17.6766 8.13676 16.7943 6.43874 15.4492 5.09031Z" fill="#2ecc71" />
													</svg>

													<div className="footer-location-detail">
														<p>Call US</p>
														<h6>9861489265</h6>
													</div>
												</a>
											</div>
											<div className="col-sm-6 col-md-12 col-lg-6">
												<a href="mailto: 021bim024@sxc.edu.np" className="footer-contacts d-flex align-items-center">
													<svg width="24" height="24" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M10.4628 12.415C10.3117 12.5095 10.1417 12.5473 9.99056 12.5473C9.83943 12.5473 9.66942 12.5095 9.5183 12.415L2 7.82471V13.9262C2 15.2297 3.05785 16.2875 4.36128 16.2875H15.6387C16.9421 16.2875 18 15.2297 18 13.9262V7.82471L10.4628 12.415Z" fill="#2ecc71" />
														<path d="M15.6374 4.5H4.35993C3.24541 4.5 2.3009 5.29339 2.07422 6.35124L10.0081 11.1871L17.9231 6.35124C17.6964 5.29339 16.7519 4.5 15.6374 4.5Z" fill="#2ecc71" />
													</svg>

													<div className="footer-location-detail">
														<p>Email US</p>
														<strong>021bim024@sxc.edu.np</strong>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
