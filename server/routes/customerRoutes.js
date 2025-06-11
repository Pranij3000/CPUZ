import { Router } from "express";
import { registerCustomer, loginCustomer, logoutCustomer, getCustomerProfile } from "../controller/customerController.js";
import { protect } from "../middleware/auth.js";

const router = Router();

// Customer Registration
router.post("/register", registerCustomer);
router.post("/login", loginCustomer);
router.post("/logout", logoutCustomer);

router.get("/profile", protect, getCustomerProfile);

export default router;
