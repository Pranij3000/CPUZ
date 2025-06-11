import PrimaryButton from "./button/PrimaryButton";
import SecondaryButton from "./button/SecondaryButton";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children, redirectTo = "/login" }) => {
	const { isAuthenticated, loading } = useAuth();

	if (loading) {
		return (
			<div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	}

	if (!isAuthenticated) {
		// Show login prompt instead of immediate redirect
		return (
			<section className="login-required py-40">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-6">
							<div className="card rounded-8">
								<div className="card-body text-center p-20">
									<h4 className="card-title">Login Required</h4>
									<p className="card-text mb-12">You need to be logged in to access this page.</p>
									<div className="row">
										<div className="col-6">
											<SecondaryButton placeholder="Register" path="/register"></SecondaryButton>
										</div>
										<div className="col-6">
											<PrimaryButton placeholder="Login" path="/login"></PrimaryButton>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

	return children;
};

export default ProtectedRoute;
