const express = require("express");
const path = require("path");

let db = require('../database/models')

let productController = {
    
    product: (req, res) => {
        
        db.Product.findAll()
        .then(function(product){
            return res.send(product)
        }) 
        
    },

    crear: function(req, res){
    /*  db.Product.findAll()
        .then(function(product){
            return res.render('create.ejs', {product:product})
        })  */

        res.render('create.ejs')

    },
    guardado: function(req, res){
        console.log(req.body)
        db.Product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            stock: req.body.stock
            
        }) 
        res.render('create.ejs')
    },

    listado: function(req,res){
     db.Product.findAll()
     .then(function(product){
        res.render('productList.ejs', {product:product})
     })   
    },

    /* detalle: function(req,res){
        db.Pelicula.findbyPK(req.params.id, {
            include: [{association: 'genero'}, {asssociation: 'actores'}]
        })
        .then(function(pelicula){
            res.render('detallePelicula', {pelicula: pelicula})
        })
    },

    editar: function(req,res){
        let pedidoPelicula = db.Pelicula.findByPK(req.params.id)

        let pedidoGeneros = db.Genero.findAll()

        promise.All([pedidoPelicula, pedidoGeneros])
        .then(function(pelicula, generos){
            res.render('editarPelicula', {pelicula: pelicula, genros: generos})
        })
    },

    actualizar: function(req,res){
        db.Pelicula.update({
            title: req.body.titulo,
            awards: req.body.premios,
            release_date: req.body.release_date,
            genre_id: req.body.genero,
            length: req.body.length,
            rating: req.body.rating,
        }, {
            where: {
                id: req.params.id
            }
        })

        res.redirect('/peliculas/' + req.params.id)
    },

    borrar: function(req,res){
        db.pelicula.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/peliculas')
    } */
}

module.exports = productController