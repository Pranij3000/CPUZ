import Order from "../models/order.js";
import Customer from "../models/customer.js";
import Seller from "../models/seller.js";
import { sendOrderNotificationToSellers } from "../services/emailService.js";

export const createOrder = async (req, res) => {
  try {
    const { components, totalAmount } = req.body;

    // Get customer from protected route (set by auth middleware)
    const customer = await Customer.findById(req.customer.id);

    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    // Validate components
    if (!components || !Array.isArray(components) || components.length === 0) {
      return res.status(400).json({ message: "At least one component is required" });
    }

    // Validate total amount
    if (!totalAmount || totalAmount <= 0) {
      return res.status(400).json({ message: "Invalid total amount" });
    }

    // Create the order
    const newOrder = await Order.create({
      customer: customer._id,
      customerName: `${customer.firstName} ${customer.lastName}`,
      components,
      totalAmount,
    });

    // Populate customer details in response
    const populatedOrder = await Order.findById(newOrder._id).populate("customer", "firstName lastName email");

    // Send email notifications to sellers (async - don't wait for completion)
    setImmediate(async () => {
      try {
        // Get all seller emails
        const sellers = await Seller.find({}, "email");
        const sellerEmails = sellers.map((seller) => seller.email);

        if (sellerEmails.length > 0) {
          console.log(`📧 Sending order notifications to ${sellerEmails.length} sellers...`);

          // Prepare order details for email
          const orderDetails = {
            orderId: newOrder._id,
            customerName: `${customer.firstName} ${customer.lastName}`,
            customerEmail: customer.email,
            orderDate: newOrder.createdAt,
            totalAmount: totalAmount,
            components: components,
          };

          // Send notifications
          const result = await sendOrderNotificationToSellers(sellerEmails, orderDetails);
          console.log(`✅ Order notification sent to ${result.sent}/${result.total} sellers`);

          if (result.failed > 0) {
            console.log(`⚠️ Failed to send to ${result.failed} sellers`);
          }
        } else {
          console.log("📧 No sellers found to notify");
        }
      } catch (emailError) {
        console.error("❌ Error sending email notifications:", emailError.message);
      }
    });

    res.status(201).json({
      message: "Order created successfully",
      order: populatedOrder,
    });
  } catch (error) {
    console.error("Error in createOrder:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getCustomerOrders = async (req, res) => {
  try {
    const orders = await Order.find({ customer: req.customer.id }).populate("customer", "firstName lastName email").sort({ createdAt: -1 });

    res.status(200).json({
      message: "Orders retrieved successfully",
      orders,
    });
  } catch (error) {
    console.error("Error in getCustomerOrders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findById(orderId).populate("customer", "firstName lastName email");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Check if the order belongs to the authenticated customer
    if (order.customer._id.toString() !== req.customer.id) {
      return res.status(403).json({ message: "Access denied" });
    }

    res.status(200).json({
      message: "Order retrieved successfully",
      order,
    });
  } catch (error) {
    console.error("Error in getOrderById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("customer", "firstName lastName email").sort({ createdAt: -1 });

    res.status(200).json({
      message: "All orders retrieved successfully",
      orders,
    });
  } catch (error) {
    console.error("Error in getAllOrders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const validStatuses = ["pending", "processing", "shipped", "delivered", "cancelled"];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true, runValidators: true }).populate("customer", "firstName lastName email");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({
      message: "Order status updated successfully",
      order,
    });
  } catch (error) {
    console.error("Error in updateOrderStatus:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
