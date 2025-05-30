import BannerVideo from "../sections/BannerVideo";
import WhyCpuz from "../sections/WhyCpuz";
import ComponentDisplay from "../sections/ComponentDisplay.jsx";
import BrandSlider from "../sections/BrandSlider.jsx";
import BuildYourPcAd from "../sections/BuildYourPCAD.jsx";

export default function Homepage() {
  return (
    <>
      <BannerVideo title="Elite Performance" spanText="Tailored for You" subTitle="Custom PCs built to match your needs." url="https://www.youtube.com/watch?v=01yMMLuGMRU&ab_channel=InfoFusion2.0" />
      <WhyCpuz />
      <ComponentDisplay />
      <BrandSlider />
      <BuildYourPcAd />
    </>
  );
}
