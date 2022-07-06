const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// PRODUCTOS
router.get('/', productController.product);

// CREATE
router.get('/create', productController.create)

//EDIT 
router.get('/edit', productController.edit)

module.exports = router;