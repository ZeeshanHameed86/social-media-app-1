const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Using Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Importing Routes
const postRoutes = require("./routes/PostRoute");
const userRoutes = require("./routes/UserRoute");

// Using Routes
app.use("/api/v1", postRoutes);
app.use("/api/v1", userRoutes);

module.exports = app;
