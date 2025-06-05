import BannerSimple from "../sections/BannerSimple";
import PCBuilderCard from "../components/ui/PCBuilderCard";

export default function PCBuilder() {
	const components = ["CPU", "Motherboard", "GPU", "Cooling"];
	return (
		<section className="pc-builder pt-20 pb-64 pb-md-96 bg-white">
			<div className="container">
				<div className="pc-builder-wrapper">
					{components.map((item, index) => (
						<PCBuilderCard target-data="" placeholder={item} key={index} />
					))}
				</div>
			</div>
		</section>
	);
}
