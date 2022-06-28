const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get('/producto', (req,res) => 
    res.render("producto.ejs"));

module.exports = router;