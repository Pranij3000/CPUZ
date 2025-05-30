import ComponentCard from "../components/ui/ComponentCard.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";

import "./ComponentDisplay.scss";

export default function ComponentDisplay() {
	const components = [
		{ path: "/build-your-pc", label: "CPU/Processor" },
		{ path: "/build-your-pc", label: "Graphic Card" },
		{ path: "/build-your-pc", label: "Motherboard" },
		{ path: "/build-your-pc", label: "Memory" },
		{ path: "/build-your-pc", label: "Storage" },
		{ path: "/build-your-pc", label: "Power Supply" },
		{ path: "/build-your-pc", label: "Cooling" },
		{ path: "/build-your-pc", label: "Monitor" },
	];

	return (
		<section className="component-display py-64 py-lg-96">
			<div className="container">
				<SectionTitle extraClass="text-center mb-24" title="Shop with" spanText="CPUZ" />
				<div className="component-display-wrapper">
					<div className="row">
						{components.map((component, index) => {
							if (index == 0 || index == 1) {
								return (
									<div className="col-lg-6">
										<ComponentCard label={component.label} path={component.path} />
									</div>
								);
							} else {
								return (
									<div className="col-sm-6 col-lg-4">
										<ComponentCard label={component.label} path={component.path} />
									</div>
								);
							}
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
