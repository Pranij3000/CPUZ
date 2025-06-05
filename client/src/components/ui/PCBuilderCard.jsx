import { useState } from "react";
import "./PCBuilderCard.scss";
export default function PCBuilderCard({ placeholder }) {
	const [popup, setPopup] = useState(false);
	function handleClick(e) {
		e.preventDefault();
		setPopup(!popup);
		console.log(popup);
	}
	return (
		<div className="pc-builder-card px-20 py-8 bg-light-bg rounded-20">
			<div className="pc-builder-card-top d-flex justify-content-between pb-4 border-bottom-white-200">
				<h4 className="text-white">{placeholder}</h4>
				<button onClick={(e) => handleClick(e)} className="text-text">
					+ Select part
				</button>
			</div>
			<div className="pc-part py-8">
				<p>No Components Selected</p>
			</div>
		</div>
	);
}
