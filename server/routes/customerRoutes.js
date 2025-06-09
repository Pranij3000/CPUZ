import { Router } from "express";
import { registerCustomer } from "../controller/customerController.js";

const router = Router();

// Customer Registration
router.post("/register", registerCustomer);

// Customer Login
// router.post("/login");

export default router;
