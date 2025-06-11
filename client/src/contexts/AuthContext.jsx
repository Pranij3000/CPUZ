import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);

	// Check authentication status on component mount
	useEffect(() => {
		checkAuthStatus();
	}, []);

	const checkAuthStatus = async () => {
		try {
			const response = await fetch("http://localhost:5000/api/customer/profile", {
				method: "GET",
				credentials: "include", // Include cookies
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				const data = await response.json();
				setUser(data.customer);
				setIsAuthenticated(true);
			} else {
				setUser(null);
				setIsAuthenticated(false);
			}
		} catch (error) {
			console.error("Auth check failed:", error);
			setUser(null);
			setIsAuthenticated(false);
		} finally {
			setLoading(false);
		}
	};

	const login = async (email, password) => {
		try {
			const response = await fetch("http://localhost:5000/api/customer/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (response.ok) {
				setUser(data.customer);
				setIsAuthenticated(true);
				return { success: true, message: data.message };
			} else {
				return { success: false, message: data.message };
			}
		} catch (error) {
			console.error("Login error:", error);
			return { success: false, message: "Network error occurred" };
		}
	};

	const register = async (firstName, lastName, email, password) => {
		try {
			const response = await fetch("http://localhost:5000/api/customer/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
				body: JSON.stringify({ firstName, lastName, email, password }),
			});

			const data = await response.json();

			if (response.ok) {
				setUser(data.customer);
				setIsAuthenticated(true);
				return { success: true, message: data.message };
			} else {
				return { success: false, message: data.message };
			}
		} catch (error) {
			console.error("Registration error:", error);
			return { success: false, message: "Network error occurred" };
		}
	};

	const logout = async () => {
		try {
			const response = await fetch("http://localhost:5000/api/customer/logout", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				setUser(null);
				setIsAuthenticated(false);
				return { success: true, message: "Logged out successfully" };
			} else {
				const data = await response.json();
				return { success: false, message: data.message };
			}
		} catch (error) {
			console.error("Logout error:", error);
			// Even if the request fails, clear local state
			setUser(null);
			setIsAuthenticated(false);
			return { success: false, message: "Network error occurred" };
		}
	};

	const value = {
		user,
		isAuthenticated,
		loading,
		login,
		register,
		logout,
		checkAuthStatus,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
