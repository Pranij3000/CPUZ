import ComponentCard from "../components/ui/ComponentCard.jsx";
export default function ComponentDisplay() {
  const components = [
    { path: "/build-your-pc", label: "CPU/Processor" },
    { path: "/build-your-pc", label: "Motherboard" },
    { path: "/build-your-pc", label: "Memory" },
    { path: "/build-your-pc", label: "Storage" },
    { path: "/build-your-pc", label: "Power Supply" },
    { path: "/build-your-pc", label: "Cooling" },
    { path: "/build-your-pc", label: "Monitor" },
    { path: "/build-your-pc", label: "Graphic Card" },
  ];

  return (
    <section className="component-display py-64 py-lg-96">
      <div className="container">
        <div className="component-display-wrapper">
          <div className="row">
            {components.map((component) => {
              if (component.label == "CPU/Processor" || "Graphic Card") {
                <ComponentCard label={component.label} path={component.path}></ComponentCard>;
              } else {
                console.log("false");
              }
            })}

            <div className="col-md-6 col-lg-3">
              <ComponentCard></ComponentCard>
            </div>
            <div className="col-md-6 col-lg-3">
              <ComponentCard></ComponentCard>
            </div>
            <div className="col-md-6 col-lg-3">
              <ComponentCard></ComponentCard>
            </div>
            <div className="col-md-6 col-lg-3">
              <ComponentCard></ComponentCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
