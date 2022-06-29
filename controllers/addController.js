const express = require("express");
const path = require("path");


const controlador = {
    add: (req, res) => {
        res.render('add.ejs');
    }
}

module.exports = controlador;


