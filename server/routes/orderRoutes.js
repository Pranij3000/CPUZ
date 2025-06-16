import { Router } from "express";
import { createOrder } from "../controller/orderController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.post("/create", protect, createOrder);

export default router;
