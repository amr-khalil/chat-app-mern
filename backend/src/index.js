import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

import { connectDB } from "./lib/db.js";

// Environment variables
dotenv.config();
// Initialize Express app
const app = express();
app.use(cookieParser());
const PORT = process.env.PORT || 8080;
// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

// Listening to the server and connecting to the database
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
