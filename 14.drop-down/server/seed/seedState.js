// seed/seedStates.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import State from "../models/State.js";

dotenv.config();

const states = [
  { state: "Andhra Pradesh", capital: "Amaravati" },
  { state: "Telangana", capital: "Hyderabad" },
  { state: "Karnataka", capital: "Bengaluru" },
  { state: "Tamil Nadu", capital: "Chennai" },
  { state: "Maharashtra", capital: "Mumbai" },
  { state: "Kerala", capital: "Thiruvananthapuram" },
  { state: "Gujarat", capital: "Gandhinagar" },
  { state: "Rajasthan", capital: "Jaipur" },
  { state: "Uttar Pradesh", capital: "Lucknow" },
  { state: "West Bengal", capital: "Kolkata" }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");

    await State.deleteMany(); // optional, but clean
    await State.insertMany(states);

    console.log("Seed data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedDB();
