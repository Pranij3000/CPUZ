import { useAuth } from "../contexts/AuthContext";
import PrimaryButton from "./button/PrimaryButton";
import SecondaryButton from "./button/SecondaryButton";

const ReverseProtectedRoute = ({ children, redirectTo = "/" }) => {
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

	if (isAuthenticated) {
		// Show message that user is already logged in
		return (
			<section className="already-logged-in">
				<div className="container py-5">
					<div className="row justify-content-center">
						<div className="col-md-6">
							<div className="card rounded-8">
								<div className="card-body text-center p-20">
									<h4 className="card-title">Already Logged In</h4>
									<p className="card-text mb-12">You are already logged in. You can access all features now.</p>
									<div className="row">
										<div className="col-6">
											<SecondaryButton placeholder="Build Your PC" path="/build-your-pc"></SecondaryButton>
										</div>
										<div className="col-6">
											<PrimaryButton placeholder="Go to Homepage" path="/"></PrimaryButton>
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

export default ReverseProtectedRoute;
