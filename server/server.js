import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import { clerkWebhooks } from "./controllers/webhooks.js";

dotenv.config();
// Create Express app
const app = express();

// Connect to database
await connectDB()

// Middleware
app.use(cors());

// Routes
app.get("/", (req, res) => res.send("Welcome to Learnify API"));
app.post('/clerk', express.json() , clerkWebhooks)

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
