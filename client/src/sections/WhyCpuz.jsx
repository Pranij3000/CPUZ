import "./WhyCpuz.scss";

import SectionTitleDark from "../components/ui/SectionTitleDark";
import ImageCard from "../components/ui/ImageCard.jsx";

import imageDisplay01 from "../../assets/images/imgcard-01.jpg";
import imageDisplay02 from "../../assets/images/imgcard-02.jpg";
import imageDisplay03 from "../../assets/images/imgcard-03.jpg";
import imageDisplay04 from "../../assets/images/imgcard-04.jpg";

export default function WhyCpuz() {
	return (
		<section className="why-cpuz py-64 py-lg-96 bg-white">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-12 col-lg-6">
						<div className="why-cpuz-wrapper">
							s
							<SectionTitleDark title="The Reason to Choose" spanText="CPUZ" extraClass="text-start" />
							<div className="general-content-box">
								<p className="text-main-bg">CPUZ is more than just a computer building website. It is your trusted partner in creating the perfect PC. Whether you're a gamer, creative professional, or everyday user, CPUZ guides you through selecting compatible components and comparing detailed specs with ease. Our platform takes the guesswork out of building a PC that matches your performance goals and budget. With curated part suggestions, expert recommendations, and build optimization tools, CPUZ ensures your setup is both powerful and reliable.</p>
								<p className="text-main-bg">What truly sets CPUZ apart is its ability to provide in-depth information on each component while also connecting you with trusted sellers. From processors and graphics cards to memory and storage, users can explore everything they need to know before making a decision. Once you've finalized your build, CPUZ helps you locate sellers so you can purchase confidently. Whether you're a beginner or a seasoned builder, CPUZ offers the clarity, support, and convenience you need at every step of your PC-building journey.</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="why-cpuz-image-grid d-flex pt-lg-60 grid-stack">
							<ImageCard path={imageDisplay01}></ImageCard>
							<ImageCard path={imageDisplay02}></ImageCard>
							<ImageCard path={imageDisplay03}></ImageCard>
							<ImageCard path={imageDisplay04}></ImageCard>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
