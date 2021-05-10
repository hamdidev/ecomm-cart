const express = require("express");
const router = express.Router();
const {getAllProducts, getProductById} = require('../controllers/productContr')

// get all products
router.get("/", getAllProducts);

// get a product by id
router.get("/:id", getProductById);

module.exports = router;
