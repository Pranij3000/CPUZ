import React from "react";
import { useState } from "react";
import PCBuilderCard from "../components/ui/PCBuilderCard";
import "./PCBuilder.scss";
import FormButton from "../components/button/FormButton.jsx";
import Warning from "../components/ui/Warning.jsx";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [warningSign, setWarningSign] = useState({ placeholder: "", openWarning: false, buttonMsg: "" });

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
    const hasComponents = Object.keys(selectedComponents).length > 0;

    if (!hasComponents) {
      setWarningSign({
        placeholder: "Please select at least one component before placing an order.",
        openWarning: true,
        buttonMsg: "Ok! I got it",
        setWarningSign: { setWarningSign },
      });

      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare components data for the order
      const componentsArray = Object.entries(selectedComponents).map(([componentType, component]) => ({
        componentType,
        name: component.name,
        price: component.price,
        imageURL: component.imageURL,
      }));

      const orderData = {
        components: componentsArray,
        totalAmount: calculateTotal() * 140,
      };

      const response = await fetch("http://localhost:5000/api/orders/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Important: Include cookies for authentication
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (response.ok) {
        setWarningSign({
          placeholder: "Order Placed Successfully",
          openWarning: true,
          buttonMsg: "Ok! got it",
          setWarningSign: { setWarningSign },
        });

        // Optionally reset the form after successful order
        setSelectedComponents({});
      } else {
        // Handle different error cases
        if (response.status === 401) {
          setWarningSign({
            placeholder: "Log in to place an order.",
            openWarning: true,
            buttonMsg: "Log in",
            setWarningSign: { setWarningSign },
          });
        } else {
          alert(data.message || "Failed to place order. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error placing order:", error);
      setWarningSign({
        placeholder: "An error occurred while placing the order. ",
        openWarning: true,
        buttonMsg: "Try again",
        setWarningSign: { setWarningSign },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedComponentsList = Object.entries(selectedComponents).filter(([key, value]) => value !== null);

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
                        <p className="text-black">Rs {(component.price * 140).toFixed(0)}</p>
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
                <h5 className="text-black">Estimated Total</h5>
              </div>
              <div className="col-4">
                <h5 className="text-secondary text-end">Rs {(calculateTotal() * 140).toFixed(2)}</h5>
              </div>
            </div>
          </div>

          <div className="button-wrapper d-flex justify-content-end">
            <FormButton type="button" placeholder={isSubmitting ? "Placing Order..." : "Order Now"} onClick={handleOrderSubmit} disabled={isSubmitting} />
          </div>
        </div>

        <Warning placeholder={warningSign.placeholder} openWarning={warningSign.openWarning} buttonMsg={warningSign.buttonMsg} />
      </div>
    </section>
  );
}
