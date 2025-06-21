import express, { json } from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import sellerRoutes from "./routes/sellerRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import partsRoutes from "./routes/partRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { testEmailConfiguration } from "./services/emailService.js";

config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(cookieParser());

app.use("/api/seller", sellerRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/parts", partsRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Backend API is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Global error handler:", err.stack);

  // Don't leak error details in production
  const message = process.env.NODE_ENV === "production" ? "Something went wrong!" : err.message;

  res.status(err.status || 500).json({
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

// Handle 404 routes
// app.use("*", (req, res) => {
// 	res.status(404).json({
// 		message: `Route ${req.originalUrl} not found`,
// 	});
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`🌐 Frontend URL: http://localhost:5173`);

  // Connect to database
  await connectDB();

  // Test email configuration
  console.log(`📧 Testing email configuration...`);
  const emailConfigValid = await testEmailConfiguration();
  if (emailConfigValid) {
    console.log(`✅ Email service ready`);
  } else {
    console.log(`⚠️ Email service not configured properly - check your EMAIL_USER and EMAIL_PASS in .env`);
  }
});
