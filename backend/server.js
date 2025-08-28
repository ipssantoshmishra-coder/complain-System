import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

import cors from "cors";

import { analyzeSentiment,getSolution } from "./ai.js";



const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Complaint Schema
const complaintSchema = new mongoose.Schema({
  name: String,
  email: String,
  complaint: String,
  status: { type: String, default: "Pending" },
  sentiment: {type:String,default:"confuse"},
  solution: {type:String,default:"No Solution"}
  //createdAt: { type: Date, default: Date.now }
});

const Complaint = mongoose.model("Complaint", complaintSchema);

// Routes
app.get("/api/complaints", async (req, res) => {
  const complaints = await Complaint.find();
  res.json(complaints);
});

app.post("/api/complaints", async (req, res) => {
    console.log("📩 Incoming complaint:", req.body);
  try {
    const { name, email, complaint } = req.body;
    const sentiment = await analyzeSentiment(complaint);
    const solution = await getSolution(complaint);

    const newComplaint = new Complaint({
      name,
      email,
      complaint,
      sentiment,
      solution,
    });

    await newComplaint.save();
    res.status(201).json(newComplaint);
  } catch (err) {
    console.error("❌ Error saving complaint:", err);
    res.status(500).json({ error: "Failed to save complaint" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));