const express = require("express");
const router = express.Router();
const path = require("path");


router.get('/producto', (req,res) => 
    res.render("producto.ejs"));

module.exports = router;

