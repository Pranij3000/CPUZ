import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const LogoutButton = ({ className = "btn btn-outline-danger", children = "Logout" }) => {
	const { logout, customer } = useAuth();
	const [isLoggingOut, setIsLoggingOut] = useState(false);

	const handleLogout = async () => {
		if (window.confirm("Are you sure you want to logout?")) {
			setIsLoggingOut(true);
			await logout();
			setIsLoggingOut(false);
		}
	};

	// Don't show button if user is not logged in
	if (!customer) {
		return null;
	}

	return (
		<button className={className} onClick={handleLogout} disabled={isLoggingOut}>
			{isLoggingOut ? "Logging out..." : children}
		</button>
	);
};

export default LogoutButton;
