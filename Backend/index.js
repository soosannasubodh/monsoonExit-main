const express = require("express");
const cors = require("cors");
const BlogModel = require("./model");
 require("./connection");
const blogRoutes = require('./routes/blogRoutes');

const app = express();
var PORT = 3001;
app.use(cors());
app.use(express.json());

app.post("/add", async (req, res) => {
  try {
    const data = new BlogModel(req.body);
    await data.save();
    res.json({ message: "Blog added successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error adding blog" });
  }
});

app.get("/get", async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.json(blogs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching blogs" });
  }
});

app.use('/api', blogRoutes);

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});