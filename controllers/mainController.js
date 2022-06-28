const express = require("express");
const router = express.Router();
const path = require("path");

router.get('/', (req,res) => 
    res.render("index.ejs"));

router.get('/login', (req,res) => 
    res.render("login.ejs"));
   
router.get('/eventos', (req,res) => 
    res.render("../views/eventos.ejs"));

router.get('/carrito', (req,res) => 
    res.render("../views/carrito.ejs"));

router.get('/register', (req,res) => 
    res.render("../views/register.ejs"));

router.get('/menu', (req,res) => 
    res.rener("../views/menu.ejs"));

module.exports = router;






