import { Router } from "express";
import { createOrder, getCustomerOrders, getOrderById, getAllOrders, updateOrderStatus } from "../controller/orderController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

// Protected routes - require authentication
router.post("/create", protect, createOrder);
router.get("/my-orders", protect, getCustomerOrders);
router.get("/:orderId", protect, getOrderById);

// Admin routes (you might want to add admin authentication middleware later)
router.get("/", getAllOrders);
router.patch("/:orderId/status", updateOrderStatus);

export default router;
