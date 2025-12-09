require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const uploadRoutes = require("./routes/upload");

const app = express();

// ✅ Connect with env variable
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Mongo error:", err));

// ✅ Routes
app.use("/uploads", express.static("uploads"));
app.use("/api/upload", uploadRoutes);

// ✅ PORT from env
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
