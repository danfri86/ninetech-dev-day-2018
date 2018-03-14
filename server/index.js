const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

// Init express
const app = express();

// Efter att routes/auth-routes är klar
const authRoutes = require("./routes/auth-routes");

// Connect to database
mongoose.connect("mongodb://localhost:32768/devday");

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Add headers to response
app.use((req, res, next) => {
  // Give access to every client
  res.header("Access-Control-Allow-Origin", "*");
  // Which headers are allowed on request
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  // Browsers always send options request first, before the actual request
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).send({});
  }

  next();
});

// Add routes
app.use("/api/auth", authRoutes);

// Start server
app.listen(8080, () => {
  console.log("Server started on port 8080");
});
