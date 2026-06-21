import express from "express";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Get port from environment variables
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});