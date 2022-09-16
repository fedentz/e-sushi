const express = require("express");
const path = require("path");

const controlador = {
    index: (req, res) => {
        res.render('index.ejs');
    },
    menu: (req, res) => {
        res.render("menu.ejs")
    },
    carrito: (req, res) => {
        res.render('carrito.ejs')
    },
    register: (req, res) => {
        res.render('register.ejs')
    },
    login: (req, res) => {
        res.render('login.ejs')
    },
    eventos: (req, res) => {
        res.render('eventos.ejs')
    },
    perfil: (req, res) => {
        res.render('perfil.ejs')
    }
};


module.exports = controlador;


