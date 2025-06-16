import React from "react";
import { useState } from "react";
import PCBuilderCard from "../components/ui/PCBuilderCard";
import "./PCBuilder.scss";
import PrimaryButton from "../components/button/FormButton";

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
  const [selectedComponents, setSelectedComponents] = useState({});

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

  const handleComponentSelect = (componentType, item) => {
    setSelectedComponents((prev) => ({
      ...prev,
      [componentType]: item,
    }));
  };

  const calculateTotal = () => {
    return Object.values(selectedComponents).reduce((total, component) => {
      return total + (component?.price || 0);
    }, 0);
  };

  const handleOrderSubmit = async () => {
    try {
      // Check if any components are selected
      if (Object.keys(selectedComponents).length === 0) {
        alert("Please select at least one component before placing an order.");
        return;
      }

      // Transform selected components to match backend expectations
      const componentsArray = Object.entries(selectedComponents).map(([componentType, component]) => ({
        partId: component._id || component.id, // Make sure your component data includes the MongoDB _id
        componentType: componentType,
        quantity: component.quantity || 1, // Default quantity to 1 if not specified
      }));

      console.log("Sending components:", componentsArray);

      const response = await fetch("http://localhost:5000/api/orders/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Remove Authorization header since backend uses cookies
        },
        body: JSON.stringify({
          components: componentsArray,
          // Remove totalPrice - backend calculates it
        }),
        credentials: "include", // This ensures cookies are sent
      });

      const data = await response.json();

      if (response.ok) {
        alert("Order placed successfully!");
        console.log("Order details:", data.order);
        setSelectedComponents({}); // Clear selected components
      } else {
        alert(`Failed to place order: ${data.message}`);
        console.error("Order error:", data);
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("An error occurred while placing the order. Please try again.");
    }
  };

  const selectedComponentsList = Object.entries(selectedComponents).filter(([key, value]) => value !== null);
  console.log(selectedComponents);

  return (
    <section className="pc-builder pt-40 pb-64 pt-md-64 pb-md-96 bg-white">
      <div className="container">
        <div className="pc-builder-wrapper mb-40">
          {components.map((item, index) => (
            <PCBuilderCard component={item.component} svg={item.svg} key={index} selectedItem={selectedComponents[item.component]} onComponentSelect={handleComponentSelect} />
          ))}
        </div>

        <div className="pc-builder-bottom">
          <div className="pc-builder-components mb-20">
            <div className="row justify-content-center">
              {selectedComponentsList.length > 0 ? (
                selectedComponentsList.map(([componentType, component]) => (
                  <React.Fragment key={componentType}>
                    <div className="col-4 col-md-3 col-lg-2">
                      <div className="selected-item py-8 d-flex">
                        <h6 className="text-black">{componentType}:</h6>
                      </div>
                    </div>
                    <div className="col-4 col-md-5 col-lg-6">
                      <div className="selected-item py-8 d-flex">
                        <p className="text-light-bg">{component.name}</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="component-price py-8 text-end">
                        <p className="text-black">${component.price}</p>
                      </div>
                    </div>
                  </React.Fragment>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="pc-builder-total mb-20">
            <div className="row">
              <div className="col-8">
                <h5 className="text-black">Total</h5>
              </div>
              <div className="col-4">
                <h5 className="text-secondary text-end">${calculateTotal().toFixed(2)}</h5>
              </div>
            </div>
          </div>

          <div className="button-wrapper d-flex justify-content-end">
            <PrimaryButton placeholder="Order Now" onClick={handleOrderSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
}
