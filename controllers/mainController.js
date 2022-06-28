const express = require("express");
const router = express.Router();
const path = require("path");

router.get('/', (req,res) => 
    res.sendFile(path.resolve(__dirname, "../views/index.ejs")));

router.get('/login', (req,res) => 
    res.sendFile(path.resolve(__dirname, "../views/login.ejs")));
   
router.get('/eventos', (req,res) => 
    res.sendFile(path.resolve(__dirname, "../views/eventos.ejs")));

router.get('/carrito', (req,res) => 
    res.sendFile(path.resolve(__dirname, "../views/carrito.ejs")));

router.get('/register', (req,res) => 
    res.sendFile(path.resolve(__dirname, "../views/register.ejs")));

router.get('/menu', (req,res) => 
    res.sendFile(path.resolve(__dirname, "../views/menu.ejs")));

module.exports = router;






