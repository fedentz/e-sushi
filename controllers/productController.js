const express = require("express");
const path = require("path");

const controlador = {
    product: (req, res) => {
        res.render('product.ejs');
    },
    create: (req, res) => {
        res.render('create.ejs');
    },
    edit: (req, res) => {
        res.render('edit.ejs');
    }
}

module.exports = controlador;
