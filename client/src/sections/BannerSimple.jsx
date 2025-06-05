import "./BannerSimple.scss";
export default function BannerSimple({ placeholder, background }) {
	return (
		<section className="banner-simple bg-primary-100" background={{ background }}>
			<div className="container">
				<div className="section-title text-start border-bottom-white-200 pt-20 pb-20">
					<h3>
						<span>{placeholder}</span>
					</h3>
				</div>
			</div>
		</section>
	);
}
