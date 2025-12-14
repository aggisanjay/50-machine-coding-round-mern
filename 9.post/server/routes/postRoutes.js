const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

/* CREATE POST */
router.post("/", async (req, res) => {
  try {
    const { title, body, author } = req.body;

    if (!title || !body) {
      return res.status(400).json({ message: "Title and body required" });
    }

    const post = await Post.create({ title, body, author });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/* READ POSTS (PAGINATED) */
router.get("/", async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = 6;
  const skip = (page - 1) * limit;

  const total = await Post.countDocuments();
  const posts = await Post.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  res.json({
    posts,
    totalPages: Math.ceil(total / limit),
  });
});

module.exports = router;
