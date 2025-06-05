import BannerSimple from "../sections/BannerSimple";
import PCBuilder from "../sections/PCBuilder";

export default function BuildYourPc() {
	return (
		<>
			<BannerSimple placeholder="BUILD YOUR CUSTOM PC" />
			<PCBuilder />
		</>
	);
}
