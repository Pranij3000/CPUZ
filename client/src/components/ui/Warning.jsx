import { useState, useEffect } from "react";
import "./Warning.scss";

import PrimaryButton from "../button/PrimaryButton";
export default function Warning({ placeholder, openWarning, buttonMsg }) {
	const [warning, setWarning] = useState(true);

	const closeWarning = () => {
		setWarning(false);
	};

	useEffect(() => {
		setWarning(openWarning);
	}, [openWarning]);

	return (
		<>
			<div className={`warning ${warning ? "active" : ""}`}>
				<div className="warning-wrapper bg-white rounded-16 px-16 py-32">
					<h5 className="text-light-bg text-center mb-20">{placeholder}</h5>
					<div className="button-wrapper mx-auto">
						<PrimaryButton placeholder={buttonMsg} onClick={closeWarning} />
					</div>
				</div>
				<div className={`overlay ${warning ? "active" : ""}`} onClick={closeWarning}></div>
			</div>
		</>
	);
}
