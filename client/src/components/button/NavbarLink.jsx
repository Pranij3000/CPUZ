import { Link } from "react-router-dom";

export default function NavbarLink({ path, label }) {
	return (
		<>
			<li>
				<Link to={path}>{label}</Link>
			</li>
		</>
	);
}
