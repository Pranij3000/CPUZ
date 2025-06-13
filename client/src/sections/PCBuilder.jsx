import PCBuilderCard from "../components/ui/PCBuilderCard";
import "./PCBuilder.scss";

import cpu from "../../assets/images/icons/cpu.svg";
import motherboard from "../../assets/images/icons/motherboard.svg";
import gpu from "../../assets/images/icons/gpu.svg";
import cooling from "../../assets/images/icons/cooling.svg";
import pccase from "../../assets/images/icons/pccase.svg";
import memory from "../../assets/images/icons/memory.svg";
import storage from "../../assets/images/icons/storage.svg";
import powerSupply from "../../assets/images/icons/power-supply.svg";
import monitor from "../../assets/images/icons/monitor.svg";

export default function PCBuilder() {
  const components = [
    { component: "CPU", svg: cpu },
    { component: "Motherboard", svg: motherboard },
    { component: "Memory", svg: memory },
    { component: "Storage", svg: storage },
    { component: "GPU", svg: gpu },
    { component: "Cooling", svg: cooling },
    { component: "Power Supply", svg: powerSupply },
    { component: "Case", svg: pccase },
    { component: "Monitor", svg: monitor },
  ];

  return (
    <section className="pc-builder pt-40 pb-64 pt-md-64 pb-md-96 bg-white">
      <div className="container">
        <div className="pc-builder-wrapper">
          {components.map((item, index) => (
            <PCBuilderCard component={item.component} svg={item.svg} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
