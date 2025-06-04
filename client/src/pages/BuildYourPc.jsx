import BannerSimple from "../sections/BannerSimple";
import PCBuilder from "../sections/PCBuilder";

import computer from "../../assets/images/icons/computer.svg";
export default function BuildYourPc() {
  return (
    <>
      <BannerSimple placeholder="BUILD YOUR PC" svg={computer} />
      <PCBuilder />
    </>
  );
}
