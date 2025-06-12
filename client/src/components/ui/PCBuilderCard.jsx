import { useEffect, useState } from "react";
import "./PCBuilderCard.scss";
import PrimaryButton from "../button/PrimaryButton";
import SectionTitleDark from "../../components/ui/SectionTitleDark";

export default function PCBuilderCard({ component, svg }) {
	const [popup, setPopup] = useState(false);
	const [items, setItems] = useState([]);

	const selectedComponent = component.toLowerCase().replace(/\s+/g, "");

	console.log(selectedComponent);

	function handleClick(e) {
		e.preventDefault();
		setPopup(!popup);
		console.log(popup);
	}

	useEffect(() => {
		if (popup) {
			fetch(`http://localhost:5000/api/parts/${selectedComponent}`)
				.then((res) => res.json())
				.then((data) => setItems(data))
				.catch((err) => console.error("Fetch error:", err));
		}
	}, [popup]);

	return (
		<>
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
			{popup ? (
				<>
					<div className="popup py-20 py-md-40 py-xl-60">
						<div className="container">
							<div className="popup-wrapper bg-white rounded-8 px-20 py-12">
								<div className="popup-top">
									<SectionTitleDark title="Select parts for" spanText={component} extraClass="text-start mb-20" />
								</div>
								<div className="row">
									{items.map((item, index) => (
										<>
											<div className="col-12 col-md-6 col-xl-4">
												<p key={index}>{item.name || item.model}</p>
											</div>
										</>
									))}
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<></>
			)}
		</>
	);
}
