const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("../routes/userRoutes");
const productRoutes = require("../routes/productRoutes");

const app = express();

//cors
app.use(cors({
  origin: ["http://localhost:5174","https://frontend-mern-neon.vercel.app"],
  methods:["GET","POST","PUT","DELETE"],
  credentials:true,
}))
app.use(express.json());
// Database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/users/", userRoutes);
app.use("/api/products", productRoutes);

app.listen(process.env.PORT, () => console.log("Server running on port 5000"));
