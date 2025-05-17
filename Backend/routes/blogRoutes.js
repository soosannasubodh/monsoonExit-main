const express = require('express');
const router = express.Router();
const BlogModel = require('../model');

// GET all blogs from DB
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching blogs' });
  }
});

// POST to add new blog
router.post('/blogs', async (req, res) => {
  try {
    const newBlog = new BlogModel(req.body);
    await newBlog.save();
    res.json({ message: 'Blog added successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error adding blog' });
  }
});

module.exports = router;