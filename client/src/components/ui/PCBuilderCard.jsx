import { useEffect, useState } from "react";
import "./PCBuilderCard.scss";
import PrimaryButton from "../button/PrimaryButton";
import SecondaryButton from "../button/SecondaryButton";

import FormButton from "../button/FormButton";

export default function PCBuilderCard({ component, svg, selectedItem, onComponentSelect }) {
	const [popup, setPopup] = useState(false);
	const [items, setItems] = useState([]);
	const [filteredItems, setFilteredItems] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [searchTerm, setSearchTerm] = useState("");

	const selectedComponent = component.toLowerCase().replace(/\s+/g, "");

	function openPopup(e) {
		e.preventDefault();
		setPopup(true);
	}

	function closePopup(e) {
		e.preventDefault();
		setPopup(false);
		setSearchInput("");
		setSearchTerm("");
	}

	useEffect(() => {
		if (popup) {
			fetch(`http://localhost:5000/api/parts/${selectedComponent}`)
				.then((res) => res.json())
				.then((data) => setItems(data))
				.catch((err) => console.error("Fetch error:", err));
		}
	}, [popup, selectedComponent]);

	const handleSearch = (e) => {
		e.preventDefault();
		setSearchTerm(searchInput);
	};

	const handleInputChange = (e) => {
		setSearchInput(e.target.value);
	};

	const handleAddComponent = (item) => {
		onComponentSelect(component, item);
		setPopup(false);
	};

	useEffect(() => {
		let filtered = items.filter((item) => {
			if (item.price !== null) {
				return true;
			} else {
				return false;
			}
		});

		if (searchTerm.trim() !== "") {
			filtered = filtered.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
		}

		setFilteredItems(filtered);
	}, [items, searchTerm]);

	return (
		<>
			<div className="pc-builder-card px-20 py-20 border-black-100 mb-12 rounded-8">
				<div className="pc-builder-card-top pb-4 border-bottom-white-200">
					<div className="row">
						<div className="col-7 col-md-9 col-xl-10">
							<div className="pc-builder-card-title-wrapper d-flex align-items-center flex-wrap">
								<img src={svg} alt={`${component} icon`} className="pc-component-icon" />
								<h4 className="text-light-bg">{component}</h4>
							</div>
						</div>
						<div className="col-5 col-md-3 col-xl-2">
							<PrimaryButton placeholder="Select Component" onClick={openPopup} />
						</div>
					</div>
				</div>

				{selectedItem ? (
					<div className="pc-part pt-16">
						<div className="selected-component border-top-black-100 pt-8">
							<div className="row">
								<div className="col-3">
									<div className="img-wrapper mx-auto">
										<img src={selectedItem.imageURL} alt="" className="img-fluid" />
									</div>
								</div>
								<div className="col-9">
									<div className="selected-component-content d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center text-center">
										<h6 className="text-light-bg">{selectedItem.name}</h6>
										<h4 className="text-light-bg">${selectedItem.price}</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>

			<div className={`popup bg-main-gradient rounded-8 border-top-white px-20 px-xl-40 py-20 ${popup ? "show" : ""}`}>
				<div className="popup-top d-flex justify-content-between align-items-center">
					<h3>Choose a {component}</h3>
					<div className="cross-icon-wrapper" onClick={closePopup}>
						<svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.3387 22.9963C9.99242 23.0166 9.65185 22.9009 9.38882 22.6736C8.87007 22.1491 8.87007 21.3021 9.38882 20.7776L20.7477 9.36144C21.2872 8.85403 22.1339 8.88223 22.6387 9.4245C23.0953 9.91486 23.1219 10.6686 22.701 11.1902L11.2752 22.6736C11.0156 22.8976 10.6805 23.0131 10.3387 22.9963Z" fill="white" />
							<path d="M21.5653 22.9914C21.2158 22.9899 20.8808 22.8502 20.6326 22.6023L9.32015 11.2127C8.84152 10.65 8.90659 9.80311 9.46552 9.32118C9.96437 8.89107 10.7001 8.89107 11.1989 9.32118L22.578 20.7107C23.1152 21.2171 23.1429 22.0661 22.64 22.6069C22.62 22.6284 22.5993 22.6492 22.578 22.6694C22.2993 22.9133 21.9326 23.0299 21.5653 22.9914Z" fill="white" />
						</svg>
					</div>
				</div>
				<div className="popup-filter py-12 border-bottom-white-200 mb-20">
					<form onSubmit={(e) => handleSearch(e)}>
						<div className="form-wrapper">
							<div className="row">
								<div className="col-12 col-md-6">
									<div className="search-wrapper d-flex align-items-center">
										<input type="text" className="p-8 rounded-8" value={searchInput} onChange={handleInputChange} placeholder="Search components..." />
										<FormButton type="submit" placeholder="Search" />
									</div>
								</div>
								<div className="col-12 col-md-6"></div>
							</div>
						</div>
					</form>
				</div>
				<div className="popup-items">
					<div className="row">
						{filteredItems.map((item, index) => (
							<div key={index} className="col-12 col-md-6 col-xl-4">
								<div className="item-wrapper d-flex border-white-200 rounded-12 overflow-hidden">
									<div className="item-img-wrapper bg-white">
										<img src={item.imageURL} alt="" className="img-fluid" />
									</div>
									<div className="item-content-wrapper p-12 d-flex flex-column justify-content-between">
										<div className="item-content-details">
											<p className="mb-4">{item.name}</p>
											<h6>${item.price}</h6>
										</div>
										<button className="text-white mt-8 border-white-200 py-4 px-16 d-block" onClick={() => handleAddComponent(item)}>
											Add +
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className={`overlay ${popup ? "show" : ""}`} onClick={closePopup}></div>
		</>
	);
}
