import Banner from "../sections/Banner";
import WhyCpuz from "../sections/WhyCpuz";
import BrandSlider from "../sections/BrandSlider";
import AboutCpuZ from "../sections/AboutCpuZ";

import Background from "../../assets/images/placeholder-05.jpg";
export default function About() {
  return (
    <>
      <Banner subTitle="At CPUZ, we make PC building in Nepal simple, smart, and accessible for everyone." spanText="About US" background={`url(${Background})`} />
      <AboutCpuZ />
      <BrandSlider />
      <WhyCpuz />
    </>
  );
}
