import "./BannerSimple.scss";
export default function BannerSimple({ placeholder, background }) {
	return (
		<section className="banner-simple py-20" style={{ background: background }}>
			<div className="container">
				<div className="title text-center">
					<h1>{placeholder}</h1>
				</div>
			</div>
		</section>
	);
}
