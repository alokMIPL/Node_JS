
const mongoose = require("mongoose");


// Connect mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/myDatabase")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error connecting to MongoDB", err));


// Schema
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
}, {timestamps: true});

const User = mongoose.model("user", userSchema);