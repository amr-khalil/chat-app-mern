import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./lib/db.js";

// Environment variables
dotenv.config();
// Initialize Express app
const app = express();
const PORT = process.env.PORT || 8080;
// Middlewares
app.use(express.json());
app.use("/api/auth", authRoutes);

// Listening to the server and connecting to the database
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
