import "./Error.scss";
export default function ErrorPage() {
	return (
		<>
			<section className="error-page py-64">
				<div className="container">
					<div className="error-page-wrapper d-flex align-items-end">
						<div className="title">
							<h1>
								<span className="text-white">Page not Found</span>
							</h1>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
