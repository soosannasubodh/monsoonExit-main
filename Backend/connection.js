const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://soosannasubodh61:nYLGsMaeVtqkErfZ@cluster0.r82cywx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("Connection error:", err));