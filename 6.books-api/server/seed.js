require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("./models/Book");

const sampleBooks = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    price: 499,
    publishedYear: 2018
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 399,
    publishedYear: 2020
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    price: 450,
    publishedYear: 2016
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 650,
    publishedYear: 2008
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 700,
    publishedYear: 1999
  },
  {
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    price: 520,
    publishedYear: 2015
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    price: 480,
    publishedYear: 2018
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 300,
    publishedYear: 1988
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 350,
    publishedYear: 1937
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 350,
    publishedYear: 1997
  }
];

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ Connected to MongoDB");

    // Clear existing records
    await Book.deleteMany();
    console.log("🧹 Old books removed");

    // Insert new records
    await Book.insertMany(sampleBooks);
    console.log("🌱 Sample data inserted");

  } catch (err) {
    console.error("❌ Seeding failed:", err);
  } finally {
    mongoose.disconnect();
  }
}

seedData();
