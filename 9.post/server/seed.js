const mongoose = require("mongoose");
require("dotenv").config();
const Post = require("./models/Post");

const posts = [
  {
    title: "Why Consistency Beats Talent in Software Development",
    body: "Many developers overestimate talent and underestimate consistency. Writing code daily compounds growth.",
    author: "Sanjay",
  },
  {
    title: "Common Mistakes Fresh Developers Make in React",
    body: "Overusing state and misunderstanding useEffect are common early mistakes.",
    author: "Rahul",
  },
  {
    title: "Backend Pagination: Why It Matters",
    body: "Server-side pagination protects your database and improves performance.",
    author: "Neha",
  },
  {
    title: "What I Learned After My First Interview Failure",
    body: "Failures expose gaps. Fixing fundamentals changes outcomes.",
    author: "Amit",
  },
  {
    title: "Frontend vs Backend Thinking",
    body: "Understanding full data flow makes you a better engineer.",
    author: "Priya",
  },
  {
    title: "Why Side Projects Matter More Than Certificates",
    body: "Projects prove skills. Certificates only suggest intent.",
    author: "Vikram",
  },
  {
    title: "How Debugging Teaches You More Than Tutorials",
    body: "Debugging forces deep understanding instead of surface learning.",
    author: "Sanjay",
  },
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await Post.deleteMany();
    console.log("Old posts removed");

    await Post.insertMany(posts);
    console.log("7 posts inserted successfully");

    process.exit();
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
}

seedDB();
