const express = require("express");
const upload = require("../middlewares/upload");
const File = require("../models/File");

const router = express.Router();

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Save metadata to MongoDB
    const savedFile = await File.create({
      originalName: file.originalname,
      fileName: file.filename,
      mimeType: file.mimetype,
      size: file.size,
      path: file.path,
    });

    res.status(201).json(savedFile);
  } catch (err) {
    res.status(500).json({ error: "Upload failed", details: err.message });
  }
});

module.exports = router;
