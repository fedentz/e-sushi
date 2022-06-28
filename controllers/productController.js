const express = require("express")
const router = express.Router()
const path = require("path");


router.get('/producto', (req,res) => 
    res.sendFile(path.resolve(__dirname, "../views/producto.ejs")));

module.exports = router;

