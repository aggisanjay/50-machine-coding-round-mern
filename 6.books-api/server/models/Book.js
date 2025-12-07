const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    publishedYear: {
      type: Number
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
