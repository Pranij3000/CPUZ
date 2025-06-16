import Order from "../models/order.js";
import Part from "../models/part.js";

export const createOrder = async (req, res) => {
  try {
    const { components } = req.body;
    const customer = req.customer; // From protect middleware

    if (!components || components.length === 0) {
      return res.status(400).json({ message: "No components provided for the order." });
    }

    // Validate components and calculate total price
    let totalPrice = 0;
    const validatedComponents = await Promise.all(
      components.map(async (comp) => {
        const part = await Part.findById(comp.partId);
        if (!part) {
          throw new Error(`Part with ID ${comp.partId} not found`);
        }
        if (!comp.componentType || !["CPU", "Motherboard", "Memory", "Storage", "GPU", "Cooling", "Power Supply", "Case", "Monitor"].includes(comp.componentType)) {
          throw new Error(`Invalid component type: ${comp.componentType}`);
        }
        const quantity = comp.quantity || 1;
        totalPrice += part.price * quantity;
        return {
          partId: part._id,
          componentType: comp.componentType,
          quantity,
        };
      })
    );

    const order = new Order({
      customerId: customer._id,
      customerName: `${customer.firstName} ${customer.lastName}`,
      customerEmail: customer.email,
      components: validatedComponents,
      totalPrice,
    });

    await order.save();

    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(400).json({ message: error.message || "Failed to create order" });
  }
};
