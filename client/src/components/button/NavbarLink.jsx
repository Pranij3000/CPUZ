import { Link } from "react-router-dom";
import "./NavbarLink.scss";

export default function NavbarLink({ path, label }) {
	return (
		<>
			<li className="navbar-link">
				<Link to={path}>{label}</Link>
			</li>
		</>
	);
}
