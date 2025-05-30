import ComponentCard from "../components/ui/ComponentCard.jsx";
import SectionTitle from "../components/ui/SectionTitle.jsx";

import "./ComponentDisplay.scss";

import Cpu from "../../assets/images/cpu.png";
import GraphicCard from "../../assets/images/graphic-card.png";
import MotherBoard from "../../assets/images/motherboard.png";
import Memory from "../../assets/images/memory.png";
import Storage from "../../assets/images/storage.png";
import PowerSupply from "../../assets/images/power-supply.png";
import Cooling from "../../assets/images/cooling.png";
import Monitor from "../../assets/images/monitor.png";

export default function ComponentDisplay() {
	const components = [
		{ path: "/build-your-pc", label: "CPU/Processor", img: Cpu },
		{ path: "/build-your-pc", label: "Graphic Card", img: GraphicCard },
		{ path: "/build-your-pc", label: "Motherboard", img: MotherBoard },
		{ path: "/build-your-pc", label: "Memory", img: Memory },
		{ path: "/build-your-pc", label: "Storage", img: Storage },
		{ path: "/build-your-pc", label: "Power Supply", img: PowerSupply },
		{ path: "/build-your-pc", label: "Cooling", img: Cooling },
		{ path: "/build-your-pc", label: "Monitor", img: Monitor },
	];

	return (
		<section className="component-display py-64 py-lg-96">
			<div className="container">
				<SectionTitle extraClass="text-center mb-24" title="Uncover Key Details" spanText="About Components" />
				<div className="component-display-wrapper">
					<div className="row">
						{components.map((component, index) => {
							if (index == 0 || index == 1) {
								return (
									<div key={index} className="col-lg-6">
										<ComponentCard img={component.img} label={component.label} path={component.path} />
									</div>
								);
							} else {
								return (
									<div key={index} className="col-sm-6 col-lg-4">
										<ComponentCard img={component.img} label={component.label} path={component.path} />
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
