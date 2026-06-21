import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

import noteRoutes from "./routes/noteRoutes.js";

// Load environment variables
dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Get port from environment variables
const PORT = process.env.PORT || 3000;

// Routes
app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});