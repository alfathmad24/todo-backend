require("dotenv").config();
const express = require("express");

const todoRoutes = require("./routes/todoRoute");

const connectDB = require("./config/db.js");

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());

app.use("/api/", todoRoutes);

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.PORT} mode on port ${PORT}...`.green
  )
);
