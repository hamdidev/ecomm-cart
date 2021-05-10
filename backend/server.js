const express = require("express");
const app = express();
const connectDB = require("./config/db");
require("dotenv").config();
const productsRoute = require("./routes/productsRoute");

// Routes
app.use("/api/products", productsRoute);

connectDB();
app.use(express.json());
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
