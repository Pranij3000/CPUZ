import axios from "axios";
import { create } from "zustand";

const useAuthStore = create((set, get) => ({
	user: null, // Changed from array to null for better initial state
	isLoading: false,
	error: null,

	loginCustomer: async (formData) => {
		set({ isLoading: true, error: null });

		try {
			const response = await axios.post("http://localhost:5000/api/customer/login", formData, {
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			});

			set({
				user: response.data.customer,
				isLoading: false,
				error: null,
			});

			return response.data;
		} catch (error) {
			set({
				isLoading: false,
				error: error.response?.data?.message || "Login failed",
			});

			// Re-throw the error so the component can handle it
			throw error;
		}
	},

	logoutCustomer: () => {
		set({ user: null, error: null });
	},

	clearError: () => {
		set({ error: null });
	},

	// Optional: Method to check if user is authenticated
	isAuthenticated: () => {
		const { user } = get();
		return !!user;
	},
}));

export { useAuthStore };
