import BannerSimple from "../sections/BannerSimple";
import Background from "../../assets/images/placeholder-10.jpg";

export default function BuildYourPc() {
	return (
		<>
			<BannerSimple placeholder="BUILD YOUR PC" background={`url(${Background})`} />
		</>
	);
}
