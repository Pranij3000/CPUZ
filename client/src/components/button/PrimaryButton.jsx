import "./PrimaryButton.scss";
import { Link } from "react-router-dom";

export default function PrimaryButton({ placeholder, path, onClick }) {
	return (
		<>
			<Link onClick={onClick} to={path} className="primary-button p-8 bg-primary text-black rounded-12 d-block text-center">
				{placeholder}
			</Link>
		</>
	);
}
