const express = require("express");
const path = require("path");
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador = {
    product: (req, res) => {
        res.render('product.ejs');
    },
    create: (req, res) => {
        res.render('create.ejs');

    },
    store: (req, res) => {

        console.log(req.body)
        let productoNuevo = {
            id: products.length + 1,
            name: req.body.name,
            price: parseInt(req.body.price),
            discount: parseInt(req.body.discount),
            category: req.body.category,
            description: req.body.description,
            image: req.file.filename,
            type: req.body.type
        }

       

        let productsViejos = fs.readFileSync("./data/products.json", 'utf-8');
        let productsJson = JSON.parse(productsViejos)

        products.push(productoNuevo);

        productsJson = JSON.stringify(products,null,4);


        fs.writeFileSync(productsFilePath, productsJson);

        res.redirect("/products")

    },
    delete:  (req, res) => {
            const IdEliminar = req.params.id;
            let newProducts = products.filter(function(e){
              return e.id != IdEliminar;
          })
    },
    edit: (req, res) => {
		const productId = parseInt(req.params.id,10);
        let productToEdit = "";
        for (let i=0; i<=products.length; i++) {
            if (products[i].id === productId) {
                productToEdit = products[i]
                res.render("edit", {productToEdit: productToEdit})
            } 
        }
	},
}

module.exports = controlador;
