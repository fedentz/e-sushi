const express = require("express");
const path = require("path");

const controlador = {
    product: (req, res) => {
        res.render('product.ejs');
    }
}

module.exports = controlador;
