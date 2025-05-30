import { Link } from "react-router-dom";
import "./ComponentCard.scss";
export default function ComponentCard({ label, path }) {
	return (
		<>
			<Link className="cd-card d-block bg-light-bg px-12 pt-12 pb-80" to={path}>
				<h4 className="text-white mb-8">{label}</h4>
				<span className="colored-link">View {label}</span>
			</Link>
		</>
	);
}
